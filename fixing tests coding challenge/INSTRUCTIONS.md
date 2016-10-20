The high-level process:

1. A Kickstarter engineer emails you this challenge.
2. The objective is to fix a series of failing tests for a challenge in either
   Ruby or JavaScript. More specific instructions on this below.
3. When you're finished, zip/tarball your solution and send it back over email
   to your engineering contact at Kickstarter.
4. We review the test and let you know the next steps.

You can take as long as you need to complete the challenge, but expect it to
take 1-2 hours. The challenge is open book, so feel free to look up
documentation if it helps!

# Getting the tests to run

Complete the challenge in one language, either Ruby or JavaScript.

## Ruby

1. Change to the `ruby` directory.
2. Run `make bootstrap` to setup your environment. Bootstrapping doesn't install
   Ruby, so you may need to take care of that yourself. The code has been tested
   on Ruby 2.2.3, so try installing that version if you're having problems.
3. Run `make test` to run the tests. When you first run this command, you should
   see a series of errors. The tests are contained in `test/test_unit.rb`, but
   you shouldn't need to modify that file. To fix each test, you'll need to edit
   code in `lib/challenge.rb`. Run `make test` as you implement each method
   until all the tests pass.

## Javascript

1. Change to the `javascript` directory.
2. Run `make bootstrap` to setup your environment. Bootstrapping doesn't install
   Node, so you may need to take care of that yourself. The code has been tested
   on Node 6.8.0, so try installing that version if you're having problems.
3. Run `make test` to run the tests. When you first run this command, you should
   see a series of errors. The tests are contained in `test/test_unit.js`, but
   you shouldn't need to modify that file. To fix each test, you'll need to edit
   code in `lib/challenge.js`. Run `make test` as you implement each method
   until all the tests pass.

# Guidelines

## Simplicity / speed

Assume that you're writing code that needs to process small sets of
data (e.g. < 1,000 objects). Sometimes there are ways to speed up code, but it
obfuscates what's happening; for this challenge it's okay to make some
trade-offs in favor of simplicity, provided you can talk through your rationale.

## Functional / imperative

We find that applying functional techniques often results in code that is easy to
understand and extend. There are solutions to these challenges that avoid heavy
use of mutation, `each`/`forEach`, temporary counters, etc. Try using methods
like `map`, `reduce`, and others of that ilk.

## What you can modify

You shouldn't need to modify code in `test/*` or pull in new packages as
dependencies. You're free to add more code in `lib` if it helps you solve
problems, but you may not need to.

## If you're stuck

If you're stuck on something you might try coming back to it later, but if
you're really stuck you could also ask for help; try reaching out to your
engineering contact at Kickstarter for advice.
