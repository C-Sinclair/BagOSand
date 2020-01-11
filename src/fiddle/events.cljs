(ns fiddle.events
  (:require [sand.events :as events]
            [sand.state :as state]))

;; check state
(state/weight-total)

;; events functions
(events/increase-weight 10)
(events/decrease-weight 10)

