# `Value` is a strict, but friendly alternative to `Struct` (and `OpenStruct`).
# It's the class of choice for [value
# types](https://en.wikipedia.org/wiki/Value_type).
#
# How exactly does it differ?
#
# Definition is similar enough:
#
#     SPoint = Struct.new(:x, :y)
#     VPoint = Value.new(:x, :y)
#
# Instantiation prefers self-documenting kwargs over anonymous, order-dependent
# args:
#
#     spoint = SPoint.new(10, 10)
#     vpoint = VPoint.new(x: 10, y: 10)
#
# Properties are immutable:
#
#     spoint.x = 5 # => 5
#     vpoint.x = 5 # NoMethodError: undefined method `x='
#
# And required:
#
#     SPoint.new # => #<struct StructPoint x=nil, y=nil>
#     VPoint.new # ArgumentError: missing keywords: x, y
#
# Though, as a bonus, you can specify defaults:
#
#     VPoint = VPoint.new(x: 0, y: 0)
#     VPoint.new # => #<VPoint x: 0, y: 0>
#
# `Value` behaves a little bit like `OpenStruct`, but with more structure than
# `Struct`.
class Value
  class << self
	alias subclass_new new

	def inherited(subclass)
	  klass = subclass.superclass
	  return if klass == Value || klass.name.nil?
	  raise "Values can't be subclassed"
	end

	def new(*args, **kwargs)
	  return subclass_new(*args, **kwargs) if self < Value

	  keys = args + kwargs.keys
	  args = args.map {|a| "#{a}:"} + kwargs.map{|a, v| "#{a}: #{v.inspect}"}
	  syms = keys.map {|a| ":#{a}"}

	  klass = Class.new(Value)
	  klass.class_eval <<-EOC
		attr_reader #{syms.join(', ')}

		def initialize(#{args.join(', ')})
		  #{keys.map{|a| "@#{a}"}.join(', ')} = #{keys.join(', ')}
		end

		def to_h
		  {#{keys.map{|a| "#{a}: #{a}"}.join(', ')}}
		end

		def with(**attrs)
		  self.class.new(to_h.merge(attrs))
		end

		def ==(other)
		  hash == other.hash
		end
		alias eql? ==

		def hash
		  [self.class, #{keys.join(', ')}].hash
		end

		def inspect
		  "#<\#{self.class.name} #{keys.map{|a| "#{a}: \#{#{a}.inspect}"}.join(', ')}>"
		end
	  EOC
	  klass
	end
  end
end
