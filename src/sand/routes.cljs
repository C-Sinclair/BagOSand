(ns sand.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.history.Html5History)
  (:require [sand.state :refer [app-state]]
            [sand.pages.home :refer [home]]
            [sand.pages.login :refer [login]]
            [secretary.core :as secretary]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [reagent.core :as reagent]))

(defn hook-browser-navigation! []
  (doto (Html5History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  (secretary/set-config! :prefix "#")

  (defroute "/" []
    (swap! app-state assoc :page :home))

  (defroute "/login" []
    (swap! app-state assoc :page :login))

  (defroute "/checkout" []
    (swap! app-state assoc :page :checkout))

  (hook-browser-navigation!))

(defmulti current-page #(@app-state :page))
(defmethod current-page :home []
  [home])
(defmethod current-page :login []
  [login])
(defmethod current-page :default []
  [:div])
