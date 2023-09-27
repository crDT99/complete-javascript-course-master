function e(e,s,i,n){Object.defineProperty(e,s,{get:i,set:n,enumerable:!0,configurable:!0})}var s,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},c=i.parcelRequire3a11;null==c&&((c=function(e){if(e in n)return n[e].exports;if(e in r){var s=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,s.call(i.exports,i,i.exports),i.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,s){r[e]=s},i.parcelRequire3a11=c),c.register("27Lyk",function(s,i){e(s.exports,"register",()=>n,e=>n=e),e(s.exports,"resolve",()=>r,e=>r=e);var n,r,c={};n=function(e){for(var s=Object.keys(e),i=0;i<s.length;i++)c[s[i]]=e[s[i]]},r=function(e){var s=c[e];if(null==s)throw Error("Could not resolve bundle with id "+e);return s}}),c("27Lyk").register(JSON.parse('{"f9fpV":"index.00f388ce.js","eyyUD":"icons.c14567a0.svg"}'));console.log((s=new URL(c("27Lyk").resolve("eyyUD"),import.meta.url).toString())&&s.__esModule?s.default:s);const t=document.querySelector(".recipe"),o=async function(){try{// 1) loading recipe
let e=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"),s=await e.json();if(!e.ok)throw Error(`${s.message} (${e.status})`);console.log("this is the response",e),console.log("this is the data",s);let{recipe:i}=s.data;i={id:i.id,title:i.title,publisher:i.publisher,sourceUrl:i.source_url,image:i.image_url,servings:i.servings,cookingTime:i.cooking_time,ingredients:i.ingredients},console.log(i);// 2) Rendering Recipe
let n=`
      <figure class="recipe__fig">
      <img src="${i.image}" alt="${i.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${i.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="src/img/icons.svg#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${i.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="src/img/icons.svg#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${i.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="src/img/icons.svg#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="src/img/icons.svg#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="src/img/icons.svg#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="src/img/icons.svg#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${i.ingredients.map(e=>`
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="src/img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${e.quantity}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${e.unit}</span>
              ${e.description}
            </div>
          </li>
        `).join("")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${i.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href= "${i.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;t.innerHTML="",t.insertAdjacentHTML("afterbegin",n)}catch(e){alert(e)}};o();//# sourceMappingURL=index.00f388ce.js.map

//# sourceMappingURL=index.00f388ce.js.map
