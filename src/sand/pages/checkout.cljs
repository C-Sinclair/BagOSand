(ns sand.pages.checkout)

(defn submit []
  (js/console.log "Checkout submit"))

(defn checkout []
  [:div
   [:h1 "Checkout"]
   [:span "Wow that's some good quality sand you've picked there!"]
   [:button {:on-click #(submit)} "Get that sand"]])
