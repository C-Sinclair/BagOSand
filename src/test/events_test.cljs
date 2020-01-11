(ns sand.test.events-test
  (:require [cljs.test :refer [deftest is]]
            [sand.events :as events]
            [sand.state :as state]))

(deftest increase-weight-test
  (let [start-weight (:basket/weight @state/app-state)
        positive-increment 7
        negative-increment -21
        expected (+ start-weight positive-increment)]
    ; test regular event use
    (events/increase-weight positive-increment)
    (is (= (:basket/weight @state/app-state) expected) "Weight was not increased by the correct amount")
    ; test negative increment not allowed
    (events/increase-weight negative-increment)
    (is (= (:basket/weight @state/app-state) expected) "Weight should not be affected by negative increments")))

(deftest decrease-weight-test
  (let [start-weight 20
        positive-increment 7
        negative-increment -21]
    ; set initial weight value
    (swap! state/app-state assoc :basket/weight start-weight)
    ; test regular event use
    (def expected (- start-weight positive-increment))
    (events/decrease-weight positive-increment)
    (is (or (= (:basket/weight @state/app-state) expected)
            (= (:basket/weight @state/app-state) 0)) "Weight was not decreased by the correct amount")
    ; test negative increment not allowed
    (events/decrease-weight negative-increment)
    (is (or (= (:basket/weight @state/app-state) expected)
            (= (:basket/weight @state/app-state) 0)) "Weight shouldn't be affected by negative increments")
    ; test weight cannot drop below 0
    (swap! state/app-state assoc :basket/weight (- positive-increment 2))
    (events/decrease-weight positive-increment)
    (is (= (:basket/weight @state/app-state) 0) "Weight shouldn't be able to drop below 0")))

(cljs.test/run-tests)
