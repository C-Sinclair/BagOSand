(ns sand.pages.home
  (:require-macros [cljss.core :refer [defstyles]])
  (:require [sand.state :as state]
            [sand.events :as events]
            [cljss.core :as css]
            [clojure.string :as str]))

(defstyles title []
  {:font-size "3em"
   :padding-left "20px"})

(defstyles item-li []
  {:list-style "none"})

(defstyles item-bottom-container []
  {:display "flex"
   :justify-content "space-between"})

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

(defn sand-item [item]
  [:li {:class (item-li)}
   [:img {:src "../../../resources/public/img/sand1.png"}]
   [:h4 (:title item)]
   [:p (:description item)]
   [:div {:class (item-bottom-container)}
    [:div
     (increase-button)
     (decrease-button)]
    [:div
     [:div
      [:label "quality"]
      [:span (:quality item)]]
     [:div
      [:label "fineness"]
      [:span (:fineness item)]]]]
   ])

(defn sand-list []
  [:section
   [:ul#sand-list
    (for [item state/catalogue]
      ^{:key (:id item)} (sand-item item))]])

(defn basket
  []
  [:section
   [:h1 "Sand Basket"]
   [:ul#basket-list
    (for [item (state/basket-items)]
      ^{:key item}
      [:li
        [:span (:title item)]
        [:sub "quantity"]
        [:span (:quantiy item)]
        [:sub "total"]
       [:span ()]])
    [:div.weight
     [:sub "Weighing in at "]
     [:strong (state/weight-total)]]
    [:span (str "Subtotal" (state/subtotal))]]])

(defn home
  []
  [:main
   [:h1 {:class (title)} "Bag o Sand"]
   (sand-list)
   (basket)
   [:a {:href "#/login"} "Login to view your sand"]])
