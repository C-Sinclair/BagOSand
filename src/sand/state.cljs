(ns sand.state
    (:require [reagent.core :refer [atom]]
              [clojure.string :as str]))

(defonce app-state (atom 
    {:basket/weight 0
     :basket/total  0}))

(defn weight-total 
    []
    (str (:basket/weight @app-state) "g"))

(defn subtotal 
    []
    (str "£" (:basket/total @app-state)))

(defn plus 
  [x y]
  (+ x y))

(plus 1 5)
