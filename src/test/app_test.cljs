(ns test.app-test
  (:require [cljs.test :refer (deftest is)]))

(deftest a-failing-test
  (is (= 1 2)))

(cljs.test/run-tests)
