(function () {
  "use strict";

  var SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/noirveil_ua?igsh=MWx5YXh2Nmk0NG5hNQ%3D%3D&utm_source=qr",
    tiktok: "https://www.tiktok.com/@noirveil_ukraine",
    telegram: "https://t.me/noirveiltgk",
    orders: "https://t.me/noirveil_dm"
  };

  var EDITORIAL_IMAGES = [
    {
      src: "assets/images/IMG_6013.JPG",
      alt: "NOIRVEIL editorial image"
    },
    {
      src: "assets/images/IMG_5606.PNG",
      alt: "NOIRVEIL studio image"
    },
    {
      src: "assets/images/IMG_5199.JPG",
      alt: "NOIRVEIL product detail"
    },
    {
      src: "assets/images/IMG_5016.PNG",
      alt: "NOIRVEIL campaign image"
    }
  ];

  var PRODUCTS = [
    {
      slug: "black-imprint-noirveil-pants",
      name: "Black Imprint Noirveil Pants",
      category: "Pants",
      status: "Available",
      sizes: ["S", "M"],
      price: "₴1,400.00",
      priceValue: 1400,
      images: [
        "products/BLACK IMPRINT NOIRVEIL PANTS.jpg",
        "products/BLACK IMPRINT NOIRVEIL PANTS2.jpg",
        "products/BLACK IMPRINT NOIRVEIL PANTS3.jpg"
      ],
      description: "Black imprint pants with a daily fit, bold logo placement, and the stripped-back NOIRVEIL streetwear mood.",
      details: [
        "Size: S / M.",
        "Material information and measurements for each size are provided by private message on request: @noirveil_dm.",
        "Worldwide shipping. Orders in Ukraine ship in 1-2 days, with possible delay in case of emergency.",
        "Payment: full payment or 50% prepayment."
      ]
    },
    {
      slug: "noirveil-141",
      name: "Noirveil 141",
      category: "Pants",
      status: "Available",
      sizes: ["S", "M"],
      price: "₴1,200.00",
      priceValue: 1200,
      images: [
        "products/141.jpg",
        "products/1412.jpg",
        "products/1413.jpg",
        "products/1414.jpg"
      ],
      description: "NOIRVEIL 141 piece with a compact black silhouette and everyday sizing support by DM.",
      details: [
        "Size: S / M.",
        "Write to @noirveil_dm for measurements and sizing help.",
        "For orders: @noirveil_dm.",
        "Payment: full payment or 50% prepayment."
      ]
    },
    {
      slug: "tracksuit-noirveil-reflect",
      name: "Noirveil Reflect Tracksuit",
      category: "Tracksuit",
      status: "Available",
      sizes: ["S", "M", "L"],
      price: "from ₴1,950.00",
      priceValue: 1950,
      images: [
        "products/Tracksuit Noirveil Reflect.jpg",
        "products/Tracksuit Noirveil Reflect2.jpg",
        "products/Tracksuit Noirveil Reflect3.jpg",
        "products/Tracksuit Noirveil Reflect4.jpg",
        "products/Tracksuit Noirveil Reflect5.jpg",
        "products/Tracksuit Noirveil Reflect6.JPG",
        "products/Tracksuit Noirveil Reflect7.JPG"
      ],
      description: "Reflective NOIRVEIL tracksuit in heavy cotton fleece with embroidered lettering and a denim logo patch on the back pocket.",
      details: [
        "Hoodie: ₴1,950 / 41 EUR. Pants: ₴1,950 / 41 EUR. Full tracksuit: ₴4,000 / 79 EUR.",
        "Heavy 390 gsm three-thread cotton fleece.",
        "Reflective elements, embroidered text, denim logo on the back pocket, comfortable everyday fit.",
        "Worldwide shipping. Orders in Ukraine ship in 1-2 days, with possible delay in case of emergency.",
        "Payment: full payment or 50% prepayment."
      ]
    },
    {
      slug: "shorts-sakura",
      name: "Sakura Shorts",
      category: "Shorts",
      status: "Available",
      sizes: ["S", "M", "L"],
      price: "₴1,200.00 | 24 EUR",
      priceValue: 1200,
      images: [
        "products/Sakura.jpg",
        "products/Sakura2.jpg",
        "products/Sakura3.jpg",
        "products/Sakura4.jpg"
      ],
      description: "Sakura shorts with a graphic NOIRVEIL tone, made for hot days, shoots, and clean streetwear layering.",
      details: [
        "Size: S / M / L.",
        "Material information and measurements for each size are provided by private message on request: @noirveil_dm.",
        "Worldwide shipping. Orders in Ukraine ship in 1-2 days, with possible delay in case of emergency.",
        "Payment: full payment or 50% prepayment."
      ]
    },
    {
      slug: "noirveil-first-tees",
      name: "Noirveil First T-Shirts",
      category: "Tops",
      status: "Pre-order",
      sizes: ["S", "M", "L"],
      price: "₴950.00 | 18 EUR",
      priceValue: 950,
      images: [
        "products/футболки Noirveil.jpg",
        "products/футболки Noirveil2.jpg",
        "products/футболки Noirveil3.jpg",
        "products/футболки Noirveil4.jpg",
        "products/футболки Noirveil5.jpg",
        "products/футболки Noirveil6.jpg"
      ],
      description: "The first NOIRVEIL T-shirt pre-order drop. The release price will be higher after the pre-order window.",
      details: [
        "Size: S / M / L. Size grid is shown on the last product photo.",
        "Pre-order advantage: the drop price will be higher.",
        "Material information and measurements for each size are provided by private message on request: @noirveil_dm.",
        "Worldwide shipping. Orders in Ukraine ship in 1-3 days, with possible delay in case of emergency.",
        "Payment: full payment."
      ]
    }
  ];

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
      return;
    }
    callback();
  }

  function createElement(tagName, className, text) {
    var node = document.createElement(tagName);
    if (className) {
      node.className = className;
    }
    if (text !== undefined) {
      node.textContent = text;
    }
    return node;
  }

  function getTranslation(key, fallback) {
    if (window.NORVAIL_I18N) {
      return window.NORVAIL_I18N.t(key);
    }
    return fallback;
  }

  function productUrl(product) {
    return "product.html?product=" + encodeURIComponent(product.slug);
  }

  function getProductFromLocation() {
    var params = new URLSearchParams(window.location.search);
    var slug = params.get("product") || PRODUCTS[0].slug;
    return PRODUCTS.find(function (product) {
      return product.slug === slug;
    }) || PRODUCTS[0];
  }

  function appendProductImage(parent, product, src, loading) {
    var img = document.createElement("img");
    img.src = src;
    img.alt = product.name;
    img.loading = loading || "lazy";
    img.draggable = false;
    parent.appendChild(img);
    return img;
  }

  function createProductCard(product) {
    var link = createElement("a", "product-card page-link");
    link.href = productUrl(product);
    link.setAttribute("aria-label", product.name);

    var media = createElement("figure", "product-card__media product-photo-frame");
    appendProductImage(media, product, product.images[0], "lazy");
    link.appendChild(media);

    var info = createElement("div", "product-card__info");
    var copy = document.createElement("div");
    copy.appendChild(createElement("h2", "", product.name));
    info.appendChild(copy);
    info.appendChild(createElement("strong", "", product.price));
    link.appendChild(info);

    return link;
  }

  function renderProductCards(selector, products) {
    var grid = document.querySelector(selector);
    if (!grid) {
      return;
    }
    grid.innerHTML = "";
    products.forEach(function (product) {
      grid.appendChild(createProductCard(product));
    });
  }

  function sortedProducts(mode) {
    var products = PRODUCTS.slice();
    if (mode === "price-asc") {
      products.sort(function (a, b) {
        return a.priceValue - b.priceValue;
      });
    }
    if (mode === "price-desc") {
      products.sort(function (a, b) {
        return b.priceValue - a.priceValue;
      });
    }
    return products;
  }

  function renderCatalog(mode) {
    renderProductCards("[data-products-grid]", sortedProducts(mode));
    document.querySelectorAll("[data-products-count]").forEach(function (node) {
      node.textContent = PRODUCTS.length + " Products";
    });
  }

  function renderHomeProducts() {
    renderProductCards("[data-featured-products]", PRODUCTS);
  }

  function renderFeaturedDrop() {
    var product = PRODUCTS[2];
    var media = document.querySelector("[data-featured-media]");
    var title = document.querySelector("[data-featured-title]");
    var price = document.querySelector("[data-featured-price]");
    var link = document.querySelector("[data-featured-link]");

    if (media) {
      media.innerHTML = "";
      appendProductImage(media, product, product.images[0], "lazy");
    }
    if (title) {
      title.textContent = product.name;
    }
    if (price) {
      price.textContent = product.price;
    }
    if (link) {
      link.href = productUrl(product);
    }
  }

  function renderEditorialImages(selector, tileClass) {
    var container = document.querySelector(selector);
    if (!container) {
      return;
    }
    container.innerHTML = "";
    var images = container.hasAttribute("data-auto-slider") ? EDITORIAL_IMAGES.concat(EDITORIAL_IMAGES) : EDITORIAL_IMAGES;
    container.setAttribute("data-slide-count", String(EDITORIAL_IMAGES.length));
    images.forEach(function (image, index) {
      var link = createElement("a", tileClass + " reveal");
      link.href = SOCIAL_LINKS.instagram;
      link.style.setProperty("--reveal-index", String(index));
      link.setAttribute("aria-label", image.alt);

      var img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt;
      img.loading = "lazy";
      link.appendChild(img);
      container.appendChild(link);
    });
  }

  function initAutoSliders() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    document.querySelectorAll("[data-auto-slider]").forEach(function (slider) {
      var originalCount = parseInt(slider.getAttribute("data-slide-count"), 10) || 0;
      var slides = Array.prototype.slice.call(slider.children);
      var currentIndex = 0;

      if (originalCount < 2 || slides.length <= originalCount) {
        return;
      }

      function slideLeft(index) {
        var slide = slides[index];
        return slide ? slide.offsetLeft - slider.offsetLeft : 0;
      }

      window.setInterval(function () {
        if (!document.body.contains(slider)) {
          return;
        }

        currentIndex += 1;
        slider.scrollTo({
          left: slideLeft(currentIndex),
          behavior: "smooth"
        });

        if (currentIndex === originalCount) {
          window.setTimeout(function () {
            slider.scrollTo({
              left: slideLeft(0),
              behavior: "auto"
            });
            currentIndex = 0;
          }, 850);
        }
      }, 3000);
    });
  }

  function renderProductDetail() {
    var detail = document.querySelector("[data-product-detail]");
    if (!detail) {
      return;
    }

    var product = getProductFromLocation();
    var gallery = detail.querySelector("[data-product-gallery]");
    var info = detail.querySelector("[data-product-info]");

    document.title = product.name + " | NOIRVEIL";
    document.querySelectorAll('meta[property="og:title"]').forEach(function (meta) {
      meta.setAttribute("content", product.name + " | NOIRVEIL");
    });
    document.querySelectorAll('meta[name="description"], meta[property="og:description"]').forEach(function (meta) {
      meta.setAttribute("content", product.description);
    });

    if (gallery) {
      gallery.innerHTML = "";
      var mainImage = createElement("figure", "main-product-image product-photo-frame");
      var stageImage = appendProductImage(mainImage, product, product.images[0], "eager");
      stageImage.setAttribute("data-product-stage-img", "");
      gallery.appendChild(mainImage);

      var thumbnails = createElement("div", "thumbnail-strip");
      thumbnails.setAttribute("aria-label", "Product thumbnails");
      product.images.forEach(function (src, index) {
        var button = createElement("button", "thumb-button" + (index === 0 ? " is-active" : ""));
        button.type = "button";
        button.setAttribute("data-product-thumb-src", src);
        button.setAttribute("aria-label", "View " + product.name + " image " + (index + 1));
        appendProductImage(button, product, src, "lazy");
        thumbnails.appendChild(button);
      });
      gallery.appendChild(thumbnails);
    }

    if (info) {
      info.innerHTML = "";
      info.appendChild(createElement("p", "section-kicker", product.category + " / " + product.status));
      info.appendChild(createElement("h1", "", product.name));
      info.appendChild(createElement("p", "product-price", product.price));
      info.appendChild(createElement("p", "product-description", product.description));

      var detailList = createElement("ul", "product-detail-list");
      product.details.forEach(function (detailText) {
        detailList.appendChild(createElement("li", "", detailText));
      });
      info.appendChild(detailList);

      var sizeBlock = createElement("div", "size-block");
      var sizeLabel = createElement("div", "size-row-label");
      sizeLabel.appendChild(createElement("span", "", getTranslation("size", "Size")));
      var sizeChart = createElement("a", "", getTranslation("size_chart", "Size Chart"));
      sizeChart.href = SOCIAL_LINKS.orders;
      sizeChart.target = "_blank";
      sizeChart.rel = "noopener";
      sizeLabel.appendChild(sizeChart);
      sizeBlock.appendChild(sizeLabel);

      var sizeOptions = createElement("div", "size-options");
      sizeOptions.setAttribute("aria-label", "Choose size");
      product.sizes.forEach(function (size, index) {
        var button = createElement("button", index === 0 ? "is-selected" : "", size);
        button.type = "button";
        button.setAttribute("data-size-option", "");
        sizeOptions.appendChild(button);
      });
      sizeBlock.appendChild(sizeOptions);
      info.appendChild(sizeBlock);

      var addCartButton = createElement("button", "button-primary add-cart magnetic", getTranslation("add_to_cart", "Add to Cart"));
      addCartButton.type = "button";
      addCartButton.setAttribute("data-add-cart", "");
      addCartButton.setAttribute("data-i18n", "add_to_cart");
      info.appendChild(addCartButton);

      var note = createElement("p", "product-note");
      note.textContent = "For orders, measurements, and material info: ";
      var orderLink = createElement("a", "", "@noirveil_dm");
      orderLink.href = SOCIAL_LINKS.orders;
      orderLink.target = "_blank";
      orderLink.rel = "noopener";
      note.appendChild(orderLink);
      info.appendChild(note);
    }

    renderProductCards("[data-related-grid]", PRODUCTS.filter(function (item) {
      return item.slug !== product.slug;
    }).slice(0, 4));
  }

  function renderCartPreview() {
    var cartItems = document.querySelector("[data-cart-items]");
    if (!cartItems) {
      return;
    }

    var cartProducts = [PRODUCTS[0], PRODUCTS[3]];
    cartItems.innerHTML = "";
    cartProducts.forEach(function (product) {
      var row = createElement("article", "cart-row");
      row.setAttribute("data-cart-row", "");

      var img = document.createElement("img");
      img.src = product.images[0];
      img.alt = product.name;
      img.width = 80;
      img.height = 80;
      img.loading = "lazy";
      row.appendChild(img);

      var itemInfo = createElement("div", "cart-item-info");
      itemInfo.appendChild(createElement("h2", "", product.name));
      itemInfo.appendChild(createElement("p", "", "Size " + product.sizes[0]));
      row.appendChild(itemInfo);

      var qty = createElement("div", "qty-control");
      qty.setAttribute("aria-label", "Quantity controls");
      var decrease = createElement("button", "", "-");
      decrease.type = "button";
      decrease.setAttribute("data-qty-action", "decrease");
      decrease.setAttribute("aria-label", "Decrease quantity");
      var value = createElement("span", "", "1");
      value.setAttribute("data-qty-value", "");
      var increase = createElement("button", "", "+");
      increase.type = "button";
      increase.setAttribute("data-qty-action", "increase");
      increase.setAttribute("aria-label", "Increase quantity");
      qty.appendChild(decrease);
      qty.appendChild(value);
      qty.appendChild(increase);
      row.appendChild(qty);

      row.appendChild(createElement("strong", "", product.price));
      var remove = createElement("button", "remove-item", "×");
      remove.type = "button";
      remove.setAttribute("aria-label", "Remove " + product.name);
      row.appendChild(remove);
      cartItems.appendChild(row);
    });

    var emptyState = createElement("div", "empty-state");
    emptyState.setAttribute("data-empty-cart", "");
    emptyState.hidden = true;
    emptyState.appendChild(createElement("h2", "", getTranslation("empty_cart_title", "Your cart is quiet.")));
    emptyState.appendChild(createElement("p", "", getTranslation("empty_cart_text", "Start with a garment from NOIRVEIL.")));
    var shopLink = createElement("a", "button-primary page-link magnetic", getTranslation("shop_now", "Shop Now"));
    shopLink.href = "catalog.html";
    emptyState.appendChild(shopLink);
    cartItems.appendChild(emptyState);

    var total = cartProducts.reduce(function (sum, product) {
      return sum + product.priceValue;
    }, 0);
    document.querySelectorAll("[data-cart-subtotal], [data-cart-total]").forEach(function (node) {
      node.textContent = "₴" + total.toLocaleString("en-US") + ".00";
    });
  }

  function applySocialLinks() {
    document.querySelectorAll("[data-social-instagram]").forEach(function (link) {
      link.href = SOCIAL_LINKS.instagram;
    });
    document.querySelectorAll("[data-social-tiktok]").forEach(function (link) {
      link.href = SOCIAL_LINKS.tiktok;
    });
    document.querySelectorAll("[data-social-telegram]").forEach(function (link) {
      link.href = SOCIAL_LINKS.telegram;
    });
    document.querySelectorAll("[data-social-orders]").forEach(function (link) {
      link.href = SOCIAL_LINKS.orders;
    });
  }

  function renderDynamicContent() {
    applySocialLinks();
    renderFeaturedDrop();
    renderHomeProducts();
    renderEditorialImages("[data-editorial-grid]", "insta-tile");
    renderCatalog();
    renderProductDetail();
    renderCartPreview();
  }

  ready(function () {
    renderDynamicContent();
    initAutoSliders();

    var header = document.querySelector("[data-header]");
    var scrollTicking = false;

    function updateHeader() {
      if (header) {
        header.classList.toggle("is-scrolled", window.scrollY > 50);
      }
      scrollTicking = false;
    }

    window.addEventListener("scroll", function () {
      if (!scrollTicking) {
        window.requestAnimationFrame(updateHeader);
        scrollTicking = true;
      }
    }, { passive: true });
    updateHeader();

    var menu = document.querySelector("[data-mobile-menu]");
    var menuToggle = document.querySelector("[data-menu-toggle]");
    var menuClose = document.querySelector("[data-menu-close]");

    function setMenu(open) {
      if (!menu || !menuToggle) {
        return;
      }
      menu.classList.toggle("is-open", open);
      menu.setAttribute("aria-hidden", open ? "false" : "true");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("menu-open", open);
      if (header) {
        header.classList.toggle("menu-active", open);
      }
    }

    if (menuToggle) {
      menuToggle.addEventListener("click", function () {
        setMenu(true);
      });
    }

    if (menuClose) {
      menuClose.addEventListener("click", function () {
        setMenu(false);
      });
    }

    if (menu) {
      menu.addEventListener("click", function (event) {
        if (event.target === menu) {
          setMenu(false);
        }
      });
    }

    document.querySelectorAll(".mobile-nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setMenu(false);
      }
    });

    var searchTrigger = document.querySelector("[data-search-trigger]");
    var searchPanel = document.querySelector("[data-search-panel]");

    if (searchTrigger && searchPanel) {
      searchTrigger.addEventListener("click", function () {
        var open = !searchPanel.classList.contains("is-open");
        searchPanel.classList.toggle("is-open", open);
        searchPanel.setAttribute("aria-hidden", open ? "false" : "true");
        if (open) {
          var input = searchPanel.querySelector("input");
          if (input) {
            input.focus();
          }
        }
      });

      var searchForm = searchPanel.querySelector("form");
      if (searchForm) {
        searchForm.addEventListener("submit", function (event) {
          event.preventDefault();
        });
      }
    }

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      document.querySelectorAll(".reveal").forEach(function (node) {
        observer.observe(node);
      });
    } else {
      document.querySelectorAll(".reveal").forEach(function (node) {
        node.classList.add("is-visible");
      });
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".magnetic").forEach(function (node) {
        node.addEventListener("pointermove", function (event) {
          var rect = node.getBoundingClientRect();
          var x = (event.clientX - rect.left - rect.width / 2) * 0.08;
          var y = (event.clientY - rect.top - rect.height / 2) * 0.12;
          node.style.transform = "translate3d(" + x.toFixed(2) + "px," + y.toFixed(2) + "px,0)";
        });

        node.addEventListener("pointerleave", function () {
          node.style.transform = "translate3d(0,0,0)";
        });
      });
    }

    var productStageImage = document.querySelector("[data-product-stage-img]");
    document.querySelectorAll("[data-product-thumb-src]").forEach(function (button) {
      button.addEventListener("click", function () {
        if (!productStageImage) {
          return;
        }
        document.querySelectorAll("[data-product-thumb-src]").forEach(function (thumb) {
          thumb.classList.remove("is-active");
        });
        button.classList.add("is-active");
        productStageImage.src = button.getAttribute("data-product-thumb-src");
      });
    });

    document.querySelectorAll("[data-size-option]").forEach(function (button) {
      button.addEventListener("click", function () {
        document.querySelectorAll("[data-size-option]").forEach(function (option) {
          option.classList.remove("is-selected");
        });
        button.classList.add("is-selected");
      });
    });

    var addCartButton = document.querySelector("[data-add-cart]");
    if (addCartButton) {
      addCartButton.addEventListener("click", function () {
        var originalKey = addCartButton.getAttribute("data-i18n") || "add_to_cart";
        addCartButton.textContent = window.NORVAIL_I18N ? window.NORVAIL_I18N.t("added") : "Added";
        window.setTimeout(function () {
          if (window.NORVAIL_I18N) {
            addCartButton.textContent = window.NORVAIL_I18N.t(originalKey);
            window.NORVAIL_I18N.setLanguage(window.NORVAIL_I18N.getLanguage());
          } else {
            addCartButton.textContent = "Add to Cart";
          }
        }, 900);
      });
    }

    document.querySelectorAll("[data-price-range]").forEach(function (range) {
      var minInput = range.querySelector("[data-range-min]");
      var maxInput = range.querySelector("[data-range-max]");
      var minOutput = range.querySelector("[data-range-min-output]");
      var maxOutput = range.querySelector("[data-range-max-output]");

      function syncRange(changedInput) {
        var minValue = parseInt(minInput.value, 10);
        var maxValue = parseInt(maxInput.value, 10);

        if (minValue > maxValue - 20) {
          if (changedInput === minInput) {
            minValue = maxValue - 20;
            minInput.value = String(minValue);
          } else {
            maxValue = minValue + 20;
            maxInput.value = String(maxValue);
          }
        }

        if (minOutput) {
          minOutput.textContent = String(minValue);
        }
        if (maxOutput) {
          maxOutput.textContent = String(maxValue);
        }
      }

      if (minInput && maxInput) {
        minInput.addEventListener("input", function () {
          syncRange(minInput);
        });
        maxInput.addEventListener("input", function () {
          syncRange(maxInput);
        });
        syncRange(minInput);
      }
    });

    var filters = document.querySelector("[data-filters]");
    var filterToggle = document.querySelector("[data-filter-toggle]");
    var filterClose = document.querySelector("[data-filter-close]");

    function setFilters(open) {
      if (!filters) {
        return;
      }
      filters.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
    }

    if (filterToggle) {
      filterToggle.addEventListener("click", function () {
        setFilters(true);
      });
    }

    if (filterClose) {
      filterClose.addEventListener("click", function () {
        setFilters(false);
      });
    }

    var sortSelect = document.querySelector("[data-sort-products]");
    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        renderCatalog(sortSelect.value);
      });
    }

    document.querySelectorAll("[data-qty-action]").forEach(function (button) {
      button.addEventListener("click", function () {
        var control = button.closest(".qty-control");
        var value = control ? control.querySelector("[data-qty-value]") : null;
        if (!value) {
          return;
        }
        var current = parseInt(value.textContent, 10) || 1;
        var next = button.getAttribute("data-qty-action") === "increase" ? current + 1 : Math.max(1, current - 1);
        value.textContent = String(next);
      });
    });

    document.querySelectorAll(".remove-item").forEach(function (button) {
      button.addEventListener("click", function () {
        var row = button.closest("[data-cart-row]");
        if (row) {
          row.remove();
        }
        if (!document.querySelector("[data-cart-row]")) {
          var emptyState = document.querySelector("[data-empty-cart]");
          if (emptyState) {
            emptyState.hidden = false;
          }
        }
      });
    });

    var contactForm = document.querySelector("[data-contact-form]");
    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var invalid = false;
        var status = contactForm.querySelector("[data-form-status]");

        contactForm.querySelectorAll("[required]").forEach(function (field) {
          var error = contactForm.querySelector('[data-error-for="' + field.id + '"]');
          var message = "";

          if (!field.value.trim()) {
            message = window.NORVAIL_I18N ? window.NORVAIL_I18N.t("required_error") : "This field is required.";
          } else if (field.type === "email" && !/^\S+@\S+\.\S+$/.test(field.value.trim())) {
            message = window.NORVAIL_I18N ? window.NORVAIL_I18N.t("email_error") : "Enter a valid email address.";
          }

          field.setAttribute("aria-invalid", message ? "true" : "false");
          if (error) {
            error.textContent = message;
          }
          if (message) {
            invalid = true;
          }
        });

        if (invalid) {
          if (status) {
            status.classList.remove("is-success");
            status.textContent = window.NORVAIL_I18N ? window.NORVAIL_I18N.t("form_error") : "Check the marked fields and send again.";
          }
          return;
        }

        if (status) {
          status.classList.remove("is-success");
          status.textContent = window.NORVAIL_I18N ? window.NORVAIL_I18N.t("form_sending") : "Sending to NOIRVEIL client services...";
        }

        window.setTimeout(function () {
          if (status) {
            status.classList.add("is-success");
            status.textContent = window.NORVAIL_I18N ? window.NORVAIL_I18N.t("form_success") : "Message received. The studio will reply shortly.";
          }
          contactForm.reset();
        }, 450);
      });
    }
  });
})();
