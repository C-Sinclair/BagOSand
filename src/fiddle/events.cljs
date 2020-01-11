(ns fiddle.events
  (:require [sand.events :as events
             sand.state :as state]))

;; check state
(state/weight)

;; events functions

(events/increase-weight 10)
(events/increase-weight -120)
(events/increase-weight 47)

(events/decrease-weight 10)
(events/decrease-weight -21)
(events/decrease-weight 453)

