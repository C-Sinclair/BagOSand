(ns sand.styles
  (:require-macros [cljss.core :refer [defstyles]]))

(def white "#fff")
(def light-blue "#6f42c1")

(defstyles input []
  {:border "unset"
   :padding "20px"
   :width "50%"
   :background "none"
   :color white})

(defstyles button []
  {:background-color white
   :color light-blue
   :padding "20px"
   :width "50%"
   :&:hover {:background-color light-blue
             :color white
             :box-shadow "inset 1px 1px black"}})

