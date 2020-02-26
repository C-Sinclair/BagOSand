(ns sand.view
    (:require [sand.state :as state]
              [sand.events :as events]
              [sand.styles :refer [title]]
              [clojure.string :as str]))

(defn increase-button
    []
    [:input {:type "button"
             :value "+"
             :on-click #(events/increase-weight 1)}])

(defn decrease-button
    []
    [:input {:type "button"
             :value "-"
             :on-click #(events/decrease-weight 1)}])

(defn app 
    []
    [:main
        [:h1 {:class (title)} "Bag o Sand"]
        (increase-button)
        (decrease-button)
        [:div.weight 
            [:sub "Weighing in at "]
            [:strong (state/weight-total)]]
        [:span (str "Subtotal" (state/subtotal))]])

