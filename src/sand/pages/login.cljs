(ns sand.pages.login
  (:require-macros [cljss.core :refer [defstyles]])
  (:require [reagent.core :as reagent :refer [atom]]
            [cljss.core :as css]
            [sand.state :as state]))

(def white "#fff")
(def light-blue "#6f42c1")

(defstyles button []
  {:background-color white
   :color light-blue
   :&:hover {:background-color light-blue
             :color white
             :box-shadow "inset 1px 1px black"}})

(def user-credentials
  (atom {:email ""
         :password ""}))

(defn update-email [email]
   (swap! user-credentials assoc :email email))

(defn update-password [password]
  (swap! user-credentials assoc :password password))

(defn login []
  [:div [:h1 "Login Page"]
   [:form
    [:div [:label "Email"]
          [:input {:type "text"
                   :on-change #(update-email (-> % .-target .-value))}]]
    [:div [:label "Password"]
     [:input {:type "password"
              :on-change #(update-password (-> % .-target .-value))}]]
    [:button {:class (button)} "Login"]]
   [:a {:href "#/"} "Go home"]])
