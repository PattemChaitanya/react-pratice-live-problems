/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import { parse } from "recipe-ingredient-parser-v3";

const ManipulatingObject = () => {
  const ourObject = {
    "@type": "Recipe",
    title: "",
    // creatorId: userData?.id,
    // author: {
    //   name: userData?.displayName || userData?.firstName,
    //   photoURL: userData?.photoImage,
    //   email: userData?.email,
    // },
    recipeDescription: "",
    difficultyLevel: "",
    prepTime: "",
    cookTime: "",
    servings: "2",
    recipeIngredients: [{ name: "", quantity: "", units: "", prepStyle: "" }],
    recipeInstructions: [{ sectionName: "", itemListElement: [{ title: "" }] }],
    notes: "",
    tags: [],
    profileUrl: "",
    recipeUrl: "",
    imageUrl: "",
    keywords: "",
    tools: [],
    createdAt: new Date().toJSON(),
    level: "",
    // id: null,
    publishedState: false,
  };

  const incomingObject = {
    "@type": "Recipe",
    name: "Turmeric Pickle (Haldi Ka Achar)",
    author: {
      "@id":
        "https://www.vegrecipesofindia.com/#/schema/person/f547a6bf6124f411c27c1557e8d748a1",
    },
    description:
      "A no oil, 3-ingredient and simplest yet tasty pickle – this Turmeric Pickle or Haldi Ka Achar is a Gujarati special and made with fresh and raw turmeric roots, lemon juice and salt.",
    datePublished: "2022-05-20T19:00:00+00:00",
    image: [
      "https://www.vegrecipesofindia.com/wp-content/uploads/2014/05/turmeric-pickle-recipe-1.jpg",
      "https://www.vegrecipesofindia.com/wp-content/uploads/2014/05/turmeric-pickle-recipe-1-500x500.jpg",
      "https://www.vegrecipesofindia.com/wp-content/uploads/2014/05/turmeric-pickle-recipe-1-500x375.jpg",
      "https://www.vegrecipesofindia.com/wp-content/uploads/2014/05/turmeric-pickle-recipe-1-480x270.jpg",
    ],
    recipeYield: ["1", "1 small bottle"],
    prepTime: "PT15M",
    totalTime: "PT15M",
    recipeIngredient: [
      "250 grams turmeric roots  (- fresh and raw)",
      "1 teaspoon salt (or add as required)",
      "3  large lemons (- yields a bit more than ½ cup lemon juice or add more if required)",
    ],
    recipeInstructions: [
      {
        "@type": "HowToStep",
        text: "Firstly, rinse the turmeric roots in water thoroughly.",
        name: "Firstly, rinse the turmeric roots in water thoroughly.",
        url: "https://www.vegrecipesofindia.com/turmeric-pickle-recipe-kachche-haldi-ka-achaar/#wprm-recipe-135246-step-0-0",
      },
      {
        "@type": "HowToStep",
        text: "Peel and chop them into small pieces. This is very important. Do not chop them into large chunks.",
        name: "Peel and chop them into small pieces. This is very important. Do not chop them into large chunks.",
        url: "https://www.vegrecipesofindia.com/turmeric-pickle-recipe-kachche-haldi-ka-achaar/#wprm-recipe-135246-step-0-1",
      },
      {
        "@type": "HowToStep",
        text: "Extract the juice from the lemons and set aside.",
        name: "Extract the juice from the lemons and set aside.",
        url: "https://www.vegrecipesofindia.com/turmeric-pickle-recipe-kachche-haldi-ka-achaar/#wprm-recipe-135246-step-0-2",
      },
      {
        "@type": "HowToStep",
        text: "In a non reactive bowl, add the chopped turmeric pieces, salt and lemon juice. Stir to combine evenly.",
        name: "In a non reactive bowl, add the chopped turmeric pieces, salt and lemon juice. Stir to combine evenly.",
        url: "https://www.vegrecipesofindia.com/turmeric-pickle-recipe-kachche-haldi-ka-achaar/#wprm-recipe-135246-step-0-3",
      },
      {
        "@type": "HowToStep",
        text: "Spoon everything in a clean sterilized jar.",
        name: "Spoon everything in a clean sterilized jar.",
        url: "https://www.vegrecipesofindia.com/turmeric-pickle-recipe-kachche-haldi-ka-achaar/#wprm-recipe-135246-step-0-4",
      },
      {
        "@type": "HowToStep",
        text: "Close the jar with its lid and keep it in the refrigerator for 6 days.",
        name: "Close the jar with its lid and keep it in the refrigerator for 6 days.",
        url: "https://www.vegrecipesofindia.com/turmeric-pickle-recipe-kachche-haldi-ka-achaar/#wprm-recipe-135246-step-0-5",
      },
      {
        "@type": "HowToStep",
        text: "Shake the jar everyday. After 6 days, the pickle will be ready to serve.",
        name: "Shake the jar everyday. After 6 days, the pickle will be ready to serve.",
        url: "https://www.vegrecipesofindia.com/turmeric-pickle-recipe-kachche-haldi-ka-achaar/#wprm-recipe-135246-step-0-6",
      },
      {
        "@type": "HowToStep",
        text: "Serve a very small portion, about ½ to 1 teaspoon of the Turmeric Pickle with any Indian meal.",
        name: "Serve a very small portion, about ½ to 1 teaspoon of the Turmeric Pickle with any Indian meal.",
        url: "https://www.vegrecipesofindia.com/turmeric-pickle-recipe-kachche-haldi-ka-achaar/#wprm-recipe-135246-step-0-7",
      },
      {
        "@type": "HowToStep",
        text: "This Haldi Ka Achar stays good for about 2 months in the refrigerator.",
        name: "This Haldi Ka Achar stays good for about 2 months in the refrigerator.",
        url: "https://www.vegrecipesofindia.com/turmeric-pickle-recipe-kachche-haldi-ka-achaar/#wprm-recipe-135246-step-0-8",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.89",
      ratingCount: "9",
    },
    recipeCategory: ["Side Dish"],
    recipeCuisine: ["Gujarati", "Indian"],
    suitableForDiet: ["https://schema.org/Vegan"],
    keywords: "turmeric pickle",
    "@id":
      "https://www.vegrecipesofindia.com/turmeric-pickle-recipe-kachche-haldi-ka-achaar/#recipe",
    isPartOf: {
      "@id":
        "https://www.vegrecipesofindia.com/turmeric-pickle-recipe-kachche-haldi-ka-achaar/#article",
    },
    mainEntityOfPage:
      "https://www.vegrecipesofindia.com/turmeric-pickle-recipe-kachche-haldi-ka-achaar/",
  };

  useEffect(() => {}, [ourObject]);

  console.log(ourObject, "recipeIngredients");
  return (
    <div style={{}}>
      <h1>Manipulating Object</h1>
      {Object.entries(incomingObject).map((item) => {
        {
          item[0] === "@type" && (ourObject["@type"] = item[1]);
        }
        {
          item[0] === "name" && (ourObject.title = item[1]);
        }
        {
          item[0] === "description" && (ourObject.recipeDescription = item[1]);
        }
        {
          item[0] === "prepTime" && (ourObject.prepTime = item[1]);
        }
        {
          item[0] === "totalTime" && (ourObject.cookTime = item[1]);
        }
        {
          item[0] === "recipeYield" && (ourObject.servings = item[1][0]);
        }
        {
          item[0] === "recipeIngredient" &&
            item[1].map((item, index) => {
              const parsed = parse(item, "eng");
              ourObject.recipeIngredients[index] = {
                name: parsed.ingredient.split("(")[0],
                quantity: parsed.quantity,
                units: parsed.unit,
                prepStyle: parsed.preparationStyle,
              };
            });
        }
        {
          item[0] === "recipeInstructions" &&
            item[1].map((item, index) => {
              ourObject.recipeInstructions[index] = { title: item.name };
            });
        }
        {
          item[0] === "recipeCuisine" && (ourObject.tags = item[1]);
        }
        {
          item[0] === "mainEntityOfPage" && (ourObject.recipeUrl = item[1]);
        }
        {
          item[0] === "image" && (ourObject.imageUrl = item[1][0]);
        }
        {
          item[0] === "aggregateRating" && (ourObject.level = item[1]);
        }
        {
          item[0] === "keywords" && (ourObject.keywords = item[1]);
        }
        {
          item[0] === "image" && (ourObject.profileUrl = item[1]);
        }
      })}
      <section style={{ display: "flex" }}>
        <div style={{ width: "50vw", overflow: "auto", height: "90vh" }}>
          <h2>Our Object</h2>
          <pre>{JSON.stringify(ourObject, null, 2)}</pre>
        </div>
        <div style={{ width: "50vw", overflow: "auto", height: "90vh" }}>
          <h2>Incoming Object</h2>
          <pre>{JSON.stringify(incomingObject, null, 2)}</pre>
        </div>
      </section>
    </div>
  );
};

export default ManipulatingObject;
