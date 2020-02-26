(ns sand.pages.login
  (:require
   [hiccup-icons.fa :as icon]
   [reagent.core :as reagent :refer [atom]]
   [cljss.core :as css]
   [sand.styles :refer [input button]]
   [sand.state :as state]))

(def user-credentials
  (atom {:email ""
         :password ""}))

(defn update-email [email]
   (swap! user-credentials assoc :email email))

(defn update-password [password]
  (swap! user-credentials assoc :password password))

(defn submit []
  (js/console.log (str "Submitting with email: " (:email @user-credentials) " and password: " (:password @user-credentials))))

(defn login []
  [:div [:h1 "Login Page"]
   [:form
    [:div
     [:input {:class (input)
              :type "text"
              :placeholder "Email"
              :on-change #(update-email (-> % .-target .-value))}]]
    [:div
     [:input {:class (input)
              :type "password"
              :placeholder "Password"
              :on-change #(update-password (-> % .-target .-value))}]]
    [:button {:class (button)
              :on-click #(submit)} "Login"]]
   [:a {:href "#/"} icon/home-solid]])
