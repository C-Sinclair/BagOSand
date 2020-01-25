(ns sand.pages.home)

(defn home []
  [:div [:h1 "Home Page"]
   [:a {:href "#/login"} "Login to view your sand"]])
