(ns sand.events
    (:require [sand.state :refer [app-state]]))

(defn increase-weight 
    [g]
    (swap! app-state assoc :basket/weight 
        (+ (:basket/weight @app-state) g)))

(defn decrease-weight 
    [g]
    (let [new-figure (- (:basket/weight @app-state) g)]
        (if (> new-figure 0)
            (swap! app-state assoc :basket/weight new-figure)
            (swap! app-state assoc :basket/weight 0))))