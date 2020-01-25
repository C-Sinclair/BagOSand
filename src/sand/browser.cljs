(ns sand.browser
  (:require [reagent.core :as reagent]
            [sand.routes :as routes]
            [sand.view :as view]))

(defn ^:dev/after-load start 
  []
  (js/console.log "s")
  (routes/app-routes)
  (reagent/render [routes/current-page]
                  (.getElementById js/document "app" )))

(defn ^:export init 
  []
  (js/console.log "Sand Powering Up!")
  (start))

(defn res 
  []
  "Here you go!")
