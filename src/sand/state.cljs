(ns sand.state
    (:require [reagent.core :refer [atom]]
              [clojure.string :as str]))

(defonce app-state (atom 
    {:basket/items []
     :basket/weight 0
     :basket/total  0}))

(defn basket-items
  []
  (:basket/items @app-state))

(defn weight-total 
    []
    (str (:basket/weight @app-state) "g"))

(defn subtotal 
    []
    (str "£" (:basket/total @app-state)))

(def catalogue
  [{:id 1
    :title "Prestige Sand"
    :quality 17.5
    :fineness 3.1
    :description "Some of the finest sand every seen. Perfect acoutremont to any sand requiring situation. Allow for 14 days of post travel settling for the true glory of this Bag to be unleashed."
    :origin "Agapoco"}
   {:id 2
    :title "Northern Ash Sand"
    :quality 16.0
    :fineness 5.3
    :description "No true sand connoisseur can be without a collection of the finest sand the Northern hemisphere has to offer. Expect notes of burn toast and wiltered elderberry."
    :origin "North Carolina"}
   {:id 3
    :title "Latin Areia"
    :quality 17.3
    :fineness 4.3
    :description "Areia, or Sand in English, is a distinctly special form of American sand. Its crisp, dry surface leaves an impression of pure bliss, especially when enjoyed alongside the sounds of distant chiming bells."
    :origin "Columbia"}
   {:id 4
    :title "WSM Special"
    :quality 15.7
    :fineness 3.1
    :description "The well known British resort of Weston Super Mare is infamous for its sand, with visitor travelling many miles to sniff at its faint yellow fluffness. Not too fine, just the right rigour. This sand is exceptionally well balanced and can suit any disposition."
    :origin "Great Britain"}
   {:id 5
    :title "Swiss Mountain Sand"
    :quality 18.2
    :fineness 8.9
    :description "The fresh swiss mountain air can be felt deep within this bag of vintage Sand. The Bag will leave the guests of any dinnerparty yodalling until the early more dew has settled upon the distant Swiss slopes. Matches well with Camembert."
    :origin "Switzerland"}])
