(ns sand.browser
  (:require [reagent.core :as reagent]
            [sand.routes :as routes]))

(defn ^:dev/after-load start []
  (routes/app-routes)
  (reagent/render [routes/current-page]
                  (.getElementById js/document "app" )))

(defn ^:export init []
  (js/console.log "Sand Powering Up!")
  (start))

