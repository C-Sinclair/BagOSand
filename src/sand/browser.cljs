(ns sand.browser
  (:require [reagent.core :as reagent]
            [sand.view :as view]))

(defn ^:dev/after-load start 
  []
  (js/console.log "start")
  (reagent/render-component [view/app]
                            ( .getElementById js/document "app" )))

(defn ^:export init 
  []
  (js/console.log "Sand Powering Up!")
  (start))

(defn res 
  []
  "Here you go!")
