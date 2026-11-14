import {
  CommonModule,
  CotuferaService,
  DefaultValueAccessor,
  FormsModule,
  IonContent,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  SlicePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6NBMEC2O.js";
import "./chunk-6SPJQNDA.js";
import "./chunk-4I6ASPBG.js";
import "./chunk-C2AHFY3L.js";
import "./chunk-XIKJEGO5.js";
import "./chunk-F3VTTLM5.js";
import "./chunk-VDR5JHDX.js";
import "./chunk-FPUWIU25.js";
import "./chunk-FCSWUYWW.js";
import "./chunk-YUYZKVBV.js";
import "./chunk-TEMRXQTD.js";
import "./chunk-4ON2AEH7.js";
import "./chunk-YETX66NL.js";
import "./chunk-WDMUDEB6.js";

// src/app/pages/explore/explore.page.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function ExplorePage_section_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r2);
  }
}
function ExplorePage_section_2_button_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function ExplorePage_section_2_button_48_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.nextFeatured());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Siguiente destacada \u2192");
    \u0275\u0275elementEnd()();
  }
}
function ExplorePage_section_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 29)(1, "div", 30)(2, "div", 31)(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ExplorePage_section_2_span_8_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 35);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 36);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 37)(14, "div", 38)(15, "span", 39);
    \u0275\u0275text(16, "\u2B50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "div", 40);
    \u0275\u0275text(19);
    \u0275\u0275elementStart(20, "small");
    \u0275\u0275text(21, "/10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 41);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 42)(25, "span", 39);
    \u0275\u0275text(26, "\u{1F3A9}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div")(28, "div", 40);
    \u0275\u0275text(29);
    \u0275\u0275elementStart(30, "small");
    \u0275\u0275text(31, "/10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 41);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 43)(35, "span", 39);
    \u0275\u0275text(36, "\u{1F37F}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div")(38, "div", 40);
    \u0275\u0275text(39);
    \u0275\u0275elementStart(40, "small");
    \u0275\u0275text(41, "/10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 41);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 44)(45, "button", 45);
    \u0275\u0275listener("click", function ExplorePage_section_2_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openMovie(ctx_r2.featuredMovie));
    });
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47, "\u2728 Ver Ficha, Reparto y Rese\xF1as");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, ExplorePage_section_2_button_48_Template, 3, 0, "button", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 47);
    \u0275\u0275listener("click", function ExplorePage_section_2_Template_div_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openMovie(ctx_r2.featuredMovie));
    });
    \u0275\u0275element(50, "img", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-image", "linear-gradient(90deg, rgba(8,9,14,0.96) 0%, rgba(8,9,14,0.78) 52%, rgba(8,9,14,0.35) 100%), linear-gradient(180deg, rgba(8,9,14,0.2) 0%, #08090e 100%), url(" + (ctx_r2.featuredMovie.backdropUrl || ctx_r2.featuredMovie.coverUrl) + ")");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("tv", ctx_r2.featuredMovie.mediaType === "tv");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.featuredMovie.mediaType === "tv" ? "\u{1F4FA} SERIE DESTACADA" : "\u{1F3AC} PEL\xCDCULA DESTACADA", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(7, 18, ctx_r2.featuredMovie.releaseDate, 0, 4));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.featuredMovie.genres.slice(0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.featuredMovie.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.featuredMovie.synopsis);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((ctx_r2.featuredMovie.stats == null ? null : ctx_r2.featuredMovie.stats.averageScore) || "S/C");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("General (", (ctx_r2.featuredMovie.stats == null ? null : ctx_r2.featuredMovie.stats.totalReviews) || 0, ")");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r2.featuredMovie.stats == null ? null : ctx_r2.featuredMovie.stats.criticScore) || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Cr\xEDticos (", (ctx_r2.featuredMovie.stats == null ? null : ctx_r2.featuredMovie.stats.criticCount) || 0, ")");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r2.featuredMovie.stats == null ? null : ctx_r2.featuredMovie.stats.normalScore) || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Usuarios (", (ctx_r2.featuredMovie.stats == null ? null : ctx_r2.featuredMovie.stats.normalCount) || 0, ")");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.movies.length > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.featuredMovie.coverUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r2.featuredMovie.title);
  }
}
function ExplorePage_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function ExplorePage_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function ExplorePage_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.activeFilterCount);
  }
}
function ExplorePage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 54);
    \u0275\u0275listener("click", function ExplorePage_div_17_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.syncFeedback = "");
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2705 ", ctx_r2.syncFeedback, "");
  }
}
function ExplorePage_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function ExplorePage_button_41_Template_button_click_0_listener() {
      const cat_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setCategory(cat_r8.value));
    });
    \u0275\u0275elementStart(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.filters.category === cat_r8.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r8.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r8.label);
  }
}
function ExplorePage_div_42_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function ExplorePage_div_42_button_7_Template_button_click_0_listener() {
      const y_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setYear(y_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.filters.year === y_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", y_r11, " ");
  }
}
function ExplorePage_div_42_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function ExplorePage_div_42_button_12_Template_button_click_0_listener() {
      const s_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setMinScore(s_r13.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", (ctx_r2.filters.minScore || 0) === s_r13.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r13.label, " ");
  }
}
function ExplorePage_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "label", 59);
    \u0275\u0275text(3, "\u{1F4C5} Filtrar por A\xF1o de Publicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 60)(5, "button", 61);
    \u0275\u0275listener("click", function ExplorePage_div_42_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setYear("Todos"));
    });
    \u0275\u0275text(6, " Todos ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ExplorePage_div_42_button_7_Template, 2, 3, "button", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 58)(9, "label", 59);
    \u0275\u0275text(10, "\u2B50 Puntuaci\xF3n M\xEDnima Requerida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 60);
    \u0275\u0275template(12, ExplorePage_div_42_button_12_Template, 2, 3, "button", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 58)(14, "label", 59);
    \u0275\u0275text(15, "\u{1F3AF} Aplicar Filtro de Puntaje Sobre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 60)(17, "button", 61);
    \u0275\u0275listener("click", function ExplorePage_div_42_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setScoreType("average"));
    });
    \u0275\u0275text(18, " \u2B50 Promedio General ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 63);
    \u0275\u0275listener("click", function ExplorePage_div_42_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setScoreType("critic"));
    });
    \u0275\u0275text(20, " \u{1F3A9} Solo Cr\xEDticos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 64);
    \u0275\u0275listener("click", function ExplorePage_div_42_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setScoreType("normal"));
    });
    \u0275\u0275text(22, " \u{1F37F} Solo Usuarios Normales ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 65)(24, "span", 66);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 67);
    \u0275\u0275listener("click", function ExplorePage_div_42_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetFilters());
    });
    \u0275\u0275text(27, " Limpiar todos los filtros ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", !ctx_r2.filters.year || ctx_r2.filters.year === "Todos");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.availableYears);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.scoreThresholds);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r2.filters.scoreType === "average");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.filters.scoreType === "critic");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.filters.scoreType === "normal");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Mostrando ", ctx_r2.movies.length, " t\xEDtulos en cat\xE1logo");
  }
}
function ExplorePage_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 70);
  }
}
function ExplorePage_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275template(1, ExplorePage_div_43_div_1_Template, 1, 0, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ExplorePage_div_44_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function ExplorePage_div_44_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.syncFromTmdb());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' \u{1F310} Buscar "', ctx_r2.filters.title, '" en TMDB y Guardar ');
  }
}
function ExplorePage_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72);
    \u0275\u0275text(2, "\u{1F37F}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No encontramos t\xEDtulos con esos filtros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Puedes buscar cualquier pel\xEDcula o serie real en TMDB para agregarla autom\xE1ticamente a nuestra base de datos o limpiar los filtros activos.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 73);
    \u0275\u0275template(8, ExplorePage_div_44_button_8_Template, 2, 1, "button", 74);
    \u0275\u0275elementStart(9, "button", 50);
    \u0275\u0275listener("click", function ExplorePage_div_44_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetFilters());
    });
    \u0275\u0275text(10, " Ver todo el cat\xE1logo ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.filters.title);
  }
}
function ExplorePage_section_45_article_1_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const movie_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getGapBadge(movie_r17), " ");
  }
}
function ExplorePage_section_45_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 77);
    \u0275\u0275listener("click", function ExplorePage_section_45_article_1_Template_article_click_0_listener() {
      const movie_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openMovie(movie_r17));
    });
    \u0275\u0275elementStart(1, "div", 78);
    \u0275\u0275element(2, "img", 79);
    \u0275\u0275elementStart(3, "div", 80)(4, "span", 81);
    \u0275\u0275text(5, "Ver Detalles y Opiniones \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 82);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 83);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 84)(11, "div", 85)(12, "span", 86);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 87);
    \u0275\u0275text(16, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 88);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "h3", 89);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 90)(22, "div", 91)(23, "span", 92);
    \u0275\u0275text(24, "\u{1F3A9}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 93)(26, "span", 94);
    \u0275\u0275text(27, "Cr\xEDticos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 95);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(30, "div", 96);
    \u0275\u0275elementStart(31, "div", 97)(32, "span", 92);
    \u0275\u0275text(33, "\u{1F37F}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 93)(35, "span", 94);
    \u0275\u0275text(36, "Usuarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 95);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 98)(40, "span", 99);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, ExplorePage_section_45_article_1_span_42_Template, 2, 1, "span", 100);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const movie_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", movie_r17.coverUrl, \u0275\u0275sanitizeUrl)("alt", movie_r17.title);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("series", movie_r17.mediaType === "tv");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", movie_r17.mediaType === "tv" ? "SERIE" : "PEL\xCDCULA", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u2B50 ", (movie_r17.stats == null ? null : movie_r17.stats.averageScore) ? movie_r17.stats.averageScore : "S/C", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(14, 14, movie_r17.releaseDate, 0, 4));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(movie_r17.genres.slice(0, 2).join(" / "));
    \u0275\u0275advance();
    \u0275\u0275property("title", movie_r17.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(movie_r17.title);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((movie_r17.stats == null ? null : movie_r17.stats.criticScore) ? movie_r17.stats.criticScore + "/10" : "S/C");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((movie_r17.stats == null ? null : movie_r17.stats.normalScore) ? movie_r17.stats.normalScore + "/10" : "S/C");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4AC} ", (movie_r17.stats == null ? null : movie_r17.stats.totalReviews) || 0, " rese\xF1as");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (movie_r17.stats == null ? null : movie_r17.stats.criticCount) && (movie_r17.stats == null ? null : movie_r17.stats.normalCount));
  }
}
function ExplorePage_section_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 75);
    \u0275\u0275template(1, ExplorePage_section_45_article_1_Template, 43, 18, "article", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.movies);
  }
}
var ExplorePage = class _ExplorePage {
  constructor(cotufera, router) {
    this.cotufera = cotufera;
    this.router = router;
    this.movies = [];
    this.featuredMovie = null;
    this.featuredIndex = 0;
    this.meta = null;
    this.loading = true;
    this.syncingTmdb = false;
    this.syncFeedback = "";
    this.showAdvancedFilters = false;
    this.searchTimer = null;
    this.filters = {
      title: "",
      category: "Todas",
      mediaType: "all",
      year: "Todos",
      minScore: 0,
      scoreType: "average",
      sortBy: "score",
      sortOrder: "desc"
    };
    this.categories = [
      { label: "Todas", value: "Todas", icon: "\u2728" },
      { label: "Acci\xF3n", value: "Acci\xF3n", icon: "\u{1F525}" },
      { label: "Drama", value: "Drama", icon: "\u{1F3AD}" },
      { label: "Misterio", value: "Misterio", icon: "\u{1F575}\uFE0F" },
      { label: "Ciencia Ficci\xF3n", value: "Ciencia ficci\xF3n", icon: "\u{1F680}" },
      { label: "Comedia", value: "Comedia", icon: "\u{1F602}" },
      { label: "Thriller", value: "Thriller", icon: "\u{1F52A}" },
      { label: "Crimen", value: "Crimen", icon: "\u{1F575}\uFE0F\u200D\u2642\uFE0F" },
      { label: "Animaci\xF3n", value: "Animaci\xF3n", icon: "\u{1F3A8}" },
      { label: "Aventura", value: "Aventura", icon: "\u{1F5FA}\uFE0F" },
      { label: "Terror", value: "Terror", icon: "\u{1F47B}" }
    ];
    this.availableYears = ["2024", "2023", "2022", "2021", "2019", "2017", "2014", "2008"];
    this.scoreThresholds = [
      { label: "Todos los puntajes", value: 0 },
      { label: "\u2B50 6.0+ Buena", value: 6 },
      { label: "\u2B50 7.5+ Notable", value: 7.5 },
      { label: "\u2B50 8.5+ Aclamada", value: 8.5 },
      { label: "\u2B50 9.0+ Obra Maestra", value: 9 }
    ];
  }
  ngOnInit() {
    this.loadMeta();
    this.applyFilters();
  }
  ionViewWillEnter() {
    this.applyFilters(false);
  }
  get activeFilterCount() {
    let count = 0;
    if (this.filters.category && this.filters.category !== "Todas")
      count++;
    if (this.filters.mediaType && this.filters.mediaType !== "all")
      count++;
    if (this.filters.year && this.filters.year !== "Todos")
      count++;
    if (this.filters.minScore && this.filters.minScore > 0)
      count++;
    return count;
  }
  loadMeta() {
    this.cotufera.getCatalogMeta().subscribe({
      next: (meta) => {
        this.meta = meta;
        if (meta.years && meta.years.length > 0) {
          this.availableYears = meta.years;
        }
      }
    });
  }
  applyFilters(showSpinner = true) {
    if (showSpinner)
      this.loading = true;
    this.cotufera.getMovies(this.filters).subscribe({
      next: (list) => {
        this.movies = list;
        if (this.movies.length > 0) {
          this.featuredIndex = 0;
          this.featuredMovie = this.movies[0];
        } else {
          this.featuredMovie = null;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  onSearchInput() {
    if (this.searchTimer)
      clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.applyFilters(false);
    }, 350);
  }
  clearSearch() {
    this.filters.title = "";
    this.applyFilters();
  }
  syncFromTmdb() {
    const q = (this.filters.title || "").trim();
    if (!q) {
      this.syncFeedback = "Escribe el nombre de una pel\xEDcula o serie en el buscador para importarla desde TMDB.";
      return;
    }
    this.syncingTmdb = true;
    this.syncFeedback = "";
    const type = this.filters.mediaType === "all" ? "multi" : this.filters.mediaType || "multi";
    this.cotufera.discoverExternal(q, type).subscribe({
      next: (imported) => {
        this.syncingTmdb = false;
        this.syncFeedback = `Se sincronizaron y guardaron ${imported.length} t\xEDtulos reales desde TMDB en la base de datos local.`;
        this.loadMeta();
        this.applyFilters(false);
      },
      error: () => {
        this.syncingTmdb = false;
      }
    });
  }
  setMediaType(type) {
    this.filters.mediaType = type;
    this.applyFilters();
  }
  setCategory(cat) {
    this.filters.category = cat;
    this.applyFilters();
  }
  setSortBy(sort) {
    this.filters.sortBy = sort;
    this.applyFilters(false);
  }
  toggleSortOrder() {
    this.filters.sortOrder = this.filters.sortOrder === "desc" ? "asc" : "desc";
    this.applyFilters(false);
  }
  setYear(year) {
    this.filters.year = year;
    this.applyFilters();
  }
  setMinScore(score) {
    this.filters.minScore = score;
    this.applyFilters();
  }
  setScoreType(type) {
    this.filters.scoreType = type;
    this.applyFilters();
  }
  resetFilters() {
    this.filters = {
      title: "",
      category: "Todas",
      mediaType: "all",
      year: "Todos",
      minScore: 0,
      scoreType: "average",
      sortBy: "score",
      sortOrder: "desc"
    };
    this.applyFilters();
  }
  nextFeatured() {
    if (this.movies.length <= 1)
      return;
    this.featuredIndex = (this.featuredIndex + 1) % Math.min(this.movies.length, 6);
    this.featuredMovie = this.movies[this.featuredIndex];
  }
  getGapBadge(movie) {
    const c = movie.stats?.criticScore || 0;
    const n = movie.stats?.normalScore || 0;
    const diff = Math.abs(c - n);
    if (diff <= 0.8)
      return "\u{1F91D} Consenso";
    if (c > n)
      return `\u{1F3A9} +${(c - n).toFixed(1)} Cr\xEDtica`;
    return `\u{1F37F} +${(n - c).toFixed(1)} P\xFAblico`;
  }
  openMovie(movie) {
    this.router.navigate(["/pelicula", movie.tmdbId], {
      queryParams: { type: movie.mediaType || "movie" }
    });
  }
  static {
    this.\u0275fac = function ExplorePage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExplorePage)(\u0275\u0275directiveInject(CotuferaService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExplorePage, selectors: [["app-explore"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 32, consts: [[3, "fullscreen"], [1, "explore-wrapper"], ["class", "hero-showcase", 3, "backgroundImage", 4, "ngIf"], [1, "control-hub", "glass-panel"], [1, "search-row"], [1, "search-box"], [1, "search-icon"], ["type", "text", "placeholder", "Buscar pel\xEDcula, serie, actor o director...", 1, "search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", "class", "clear-search-btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "tmdb-sync-btn", 3, "click", "disabled"], ["type", "button", 1, "filter-toggle-btn", 3, "click"], ["class", "filter-count-dot", 4, "ngIf"], ["class", "sync-banner", 4, "ngIf"], [1, "primary-controls-row"], [1, "type-pills"], ["type", "button", 1, "type-pill", 3, "click"], [1, "sorting-bar"], [1, "sort-label"], [1, "sort-pills"], ["type", "button", 1, "sort-pill", 3, "click"], ["type", "button", 1, "sort-pill", "critic-sort", 3, "click"], ["type", "button", 1, "sort-pill", "normal-sort", 3, "click"], ["type", "button", 1, "sort-direction-btn", 3, "click", "title"], [1, "category-carousel"], ["type", "button", "class", "cat-chip", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "advanced-filters-drawer", 4, "ngIf"], ["class", "loading-grid", 4, "ngIf"], ["class", "empty-catalog glass-panel", 4, "ngIf"], ["class", "movies-grid", 4, "ngIf"], [1, "hero-showcase"], [1, "hero-content"], [1, "hero-badges"], [1, "media-pill"], [1, "year-pill"], ["class", "genre-pill", 4, "ngFor", "ngForOf"], [1, "hero-title", "font-display"], [1, "hero-synopsis"], [1, "hero-rating-split"], [1, "split-box", "total"], [1, "split-icon"], [1, "split-val"], [1, "split-lbl"], [1, "split-box", "critic"], [1, "split-box", "normal"], [1, "hero-actions"], ["type", "button", 1, "btn-primary-gold", 3, "click"], ["type", "button", "class", "btn-glass-cycle", 3, "click", 4, "ngIf"], [1, "hero-poster-preview", 3, "click"], [3, "src", "alt"], [1, "genre-pill"], ["type", "button", 1, "btn-glass-cycle", 3, "click"], ["type", "button", 1, "clear-search-btn", 3, "click"], [1, "filter-count-dot"], [1, "sync-banner"], ["type", "button", 3, "click"], ["type", "button", 1, "cat-chip", 3, "click"], [1, "cat-emoji"], [1, "advanced-filters-drawer"], [1, "adv-group"], [1, "adv-title"], [1, "pill-group"], ["type", "button", 1, "mini-pill", 3, "click"], ["type", "button", "class", "mini-pill", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "mini-pill", "critic", 3, "click"], ["type", "button", 1, "mini-pill", "normal", 3, "click"], [1, "adv-footer"], [1, "results-counter"], ["type", "button", 1, "reset-filters-btn", 3, "click"], [1, "loading-grid"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "empty-catalog", "glass-panel"], [1, "empty-icon"], [1, "empty-actions"], ["type", "button", "class", "btn-primary-gold", 3, "click", 4, "ngIf"], [1, "movies-grid"], ["class", "movie-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "movie-card", 3, "click"], [1, "poster-container"], ["loading", "lazy", 1, "poster-img", 3, "src", "alt"], [1, "poster-overlay"], [1, "view-cta"], [1, "card-type-badge"], [1, "card-total-score"], [1, "card-body"], [1, "card-meta-top"], [1, "card-year"], [1, "card-dot"], [1, "card-genres"], [1, "card-title", 3, "title"], [1, "dual-score-strip"], ["title", "Promedio de Cr\xEDticos Especializados", 1, "score-chip", "critic"], [1, "chip-icon"], [1, "chip-info"], [1, "chip-role"], [1, "chip-num"], [1, "score-divider"], ["title", "Promedio de Usuarios Normales", 1, "score-chip", "normal"], [1, "card-footer-info"], [1, "reviews-count"], ["class", "consensus-indicator", 4, "ngIf"], [1, "consensus-indicator"]], template: function ExplorePage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
        \u0275\u0275template(2, ExplorePage_section_2_Template, 51, 22, "section", 2);
        \u0275\u0275elementStart(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6);
        \u0275\u0275text(7, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function ExplorePage_Template_input_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.title, $event) || (ctx.filters.title = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function ExplorePage_Template_input_keyup_enter_8_listener() {
          return ctx.applyFilters();
        })("ngModelChange", function ExplorePage_Template_input_ngModelChange_8_listener() {
          return ctx.onSearchInput();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, ExplorePage_button_9_Template, 2, 0, "button", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 9);
        \u0275\u0275listener("click", function ExplorePage_Template_button_click_10_listener() {
          return ctx.syncFromTmdb();
        });
        \u0275\u0275elementStart(11, "span");
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 10);
        \u0275\u0275listener("click", function ExplorePage_Template_button_click_13_listener() {
          return ctx.showAdvancedFilters = !ctx.showAdvancedFilters;
        });
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15, "\u{1F39B}\uFE0F Filtros Avanzados");
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, ExplorePage_span_16_Template, 2, 1, "span", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, ExplorePage_div_17_Template, 5, 1, "div", 12);
        \u0275\u0275elementStart(18, "div", 13)(19, "div", 14)(20, "button", 15);
        \u0275\u0275listener("click", function ExplorePage_Template_button_click_20_listener() {
          return ctx.setMediaType("all");
        });
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 15);
        \u0275\u0275listener("click", function ExplorePage_Template_button_click_22_listener() {
          return ctx.setMediaType("movie");
        });
        \u0275\u0275text(23, " \u{1F3AC} Pel\xEDculas ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 15);
        \u0275\u0275listener("click", function ExplorePage_Template_button_click_24_listener() {
          return ctx.setMediaType("tv");
        });
        \u0275\u0275text(25, " \u{1F4FA} Series ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 16)(27, "span", 17);
        \u0275\u0275text(28, "Ordenar por:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 18)(30, "button", 19);
        \u0275\u0275listener("click", function ExplorePage_Template_button_click_30_listener() {
          return ctx.setSortBy("score");
        });
        \u0275\u0275text(31, " \u2B50 Puntaje General ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 20);
        \u0275\u0275listener("click", function ExplorePage_Template_button_click_32_listener() {
          return ctx.setSortBy("criticScore");
        });
        \u0275\u0275text(33, " \u{1F3A9} Puntaje Cr\xEDticos ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 21);
        \u0275\u0275listener("click", function ExplorePage_Template_button_click_34_listener() {
          return ctx.setSortBy("normalScore");
        });
        \u0275\u0275text(35, " \u{1F37F} Puntaje Usuarios ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "button", 19);
        \u0275\u0275listener("click", function ExplorePage_Template_button_click_36_listener() {
          return ctx.setSortBy("date");
        });
        \u0275\u0275text(37, " \u{1F4C5} Fecha Estreno ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "button", 22);
        \u0275\u0275listener("click", function ExplorePage_Template_button_click_38_listener() {
          return ctx.toggleSortOrder();
        });
        \u0275\u0275text(39);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(40, "div", 23);
        \u0275\u0275template(41, ExplorePage_button_41_Template, 5, 4, "button", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(42, ExplorePage_div_42_Template, 28, 11, "div", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(43, ExplorePage_div_43_Template, 2, 2, "div", 26)(44, ExplorePage_div_44_Template, 11, 1, "div", 27)(45, ExplorePage_section_45_Template, 2, 1, "section", 28);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("fullscreen", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.featuredMovie);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.title);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filters.title);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.syncingTmdb);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.syncingTmdb ? "\u23F3 Sincronizando..." : "\u{1F310} Importar de TMDB");
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.showAdvancedFilters);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.activeFilterCount > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.syncFeedback);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("selected", ctx.filters.mediaType === "all");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" \u{1F39E}\uFE0F Todo (", (ctx.meta == null ? null : ctx.meta.totalCatalog) || ctx.movies.length, ") ");
        \u0275\u0275advance();
        \u0275\u0275classProp("selected", ctx.filters.mediaType === "movie");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("selected", ctx.filters.mediaType === "tv");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.filters.sortBy === "score");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filters.sortBy === "criticScore");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filters.sortBy === "normalScore");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filters.sortBy === "date");
        \u0275\u0275advance(2);
        \u0275\u0275property("title", ctx.filters.sortOrder === "desc" ? "Descendente (Mayor a menor)" : "Ascendente (Menor a mayor)");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.filters.sortOrder === "desc" ? "\u2193 Mayor / Reciente" : "\u2191 Menor / Antiguo", " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAdvancedFilters);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.movies.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.movies.length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IonContent], styles: ['@charset "UTF-8";\n\n\n\n.explore-wrapper[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 82px 16px 110px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.hero-showcase[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 28px;\n  overflow: hidden;\n  min-height: 390px;\n  background-size: cover;\n  background-position: center;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 34px;\n  gap: 28px;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);\n}\n.hero-content[_ngcontent-%COMP%] {\n  max-width: 680px;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.hero-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n.media-pill[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  border-radius: 999px;\n  font-size: 0.7rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  background: rgba(245, 197, 24, 0.2);\n  color: #f5c518;\n  border: 1px solid rgba(245, 197, 24, 0.4);\n}\n.media-pill.tv[_ngcontent-%COMP%] {\n  background: rgba(0, 229, 255, 0.18);\n  color: #38ecff;\n  border-color: rgba(0, 229, 255, 0.4);\n}\n.year-pill[_ngcontent-%COMP%], \n.genre-pill[_ngcontent-%COMP%] {\n  padding: 4px 11px;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.09);\n  color: #e2e8f0;\n  backdrop-filter: blur(8px);\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(1.8rem, 3.5vw, 2.75rem);\n  font-weight: 800;\n  margin: 0;\n  line-height: 1.08;\n  color: #ffffff;\n  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);\n}\n.hero-synopsis[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.94rem;\n  line-height: 1.55;\n  color: #cbd5e1;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.hero-rating-split[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 4px;\n}\n.split-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 15px;\n  border-radius: 16px;\n  background: rgba(15, 18, 28, 0.78);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.split-box.total[_ngcontent-%COMP%] {\n  border-color: rgba(245, 197, 24, 0.4);\n}\n.split-box.critic[_ngcontent-%COMP%] {\n  border-color: rgba(255, 51, 102, 0.42);\n  background: rgba(255, 51, 102, 0.1);\n}\n.split-box.normal[_ngcontent-%COMP%] {\n  border-color: rgba(0, 229, 255, 0.38);\n  background: rgba(0, 229, 255, 0.09);\n}\n.split-icon[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n}\n.split-val[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.1;\n}\n.split-val[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  opacity: 0.7;\n}\n.split-lbl[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 6px;\n}\n.btn-primary-gold[_ngcontent-%COMP%] {\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #f5c518 0%,\n      #e09f00 100%);\n  color: #08090e;\n  font-weight: 800;\n  font-size: 0.88rem;\n  padding: 12px 22px;\n  border-radius: 14px;\n  cursor: pointer;\n  box-shadow: 0 8px 24px rgba(245, 197, 24, 0.3);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.btn-primary-gold[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 28px rgba(245, 197, 24, 0.42);\n}\n.btn-glass-cycle[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  background: rgba(255, 255, 255, 0.07);\n  color: #f8fafc;\n  font-weight: 700;\n  font-size: 0.85rem;\n  padding: 12px 18px;\n  border-radius: 14px;\n  cursor: pointer;\n  backdrop-filter: blur(10px);\n  transition: all 0.2s ease;\n}\n.btn-glass-cycle[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.14);\n}\n.hero-poster-preview[_ngcontent-%COMP%] {\n  width: 195px;\n  flex-shrink: 0;\n  border-radius: 18px;\n  overflow: hidden;\n  border: 2px solid rgba(255, 255, 255, 0.16);\n  box-shadow: 0 20px 44px rgba(0, 0, 0, 0.75);\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.hero-poster-preview[_ngcontent-%COMP%]:hover {\n  transform: scale(1.04) rotate(1deg);\n}\n.hero-poster-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.control-hub[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.search-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.search-box[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 240px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: rgba(8, 9, 14, 0.75);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 16px;\n  padding: 0 14px;\n  transition: border-color 0.2s ease;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #f5c518;\n  box-shadow: 0 0 0 3px rgba(245, 197, 24, 0.15);\n}\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-right: 10px;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  background: transparent;\n  color: #f8fafc;\n  font-size: 0.9rem;\n  padding: 13px 0;\n  outline: none;\n}\n.clear-search-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: rgba(255, 255, 255, 0.1);\n  color: #cbd5e1;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 0.75rem;\n}\n.tmdb-sync-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 229, 255, 0.38);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 229, 255, 0.18),\n      rgba(0, 229, 255, 0.06));\n  color: #38ecff;\n  font-weight: 700;\n  font-size: 0.82rem;\n  padding: 12px 16px;\n  border-radius: 16px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.tmdb-sync-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(0, 229, 255, 0.28);\n  transform: translateY(-1px);\n}\n.filter-toggle-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.05);\n  color: #e2e8f0;\n  font-weight: 700;\n  font-size: 0.82rem;\n  padding: 12px 16px;\n  border-radius: 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filter-toggle-btn.active[_ngcontent-%COMP%] {\n  border-color: #f5c518;\n  color: #f5c518;\n  background: rgba(245, 197, 24, 0.12);\n}\n.filter-count-dot[_ngcontent-%COMP%] {\n  background: #f5c518;\n  color: #090a0f;\n  font-size: 0.7rem;\n  font-weight: 800;\n  padding: 2px 7px;\n  border-radius: 999px;\n}\n.sync-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  border-radius: 12px;\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.35);\n  color: #34d399;\n  font-size: 0.84rem;\n  font-weight: 600;\n}\n.sync-banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #34d399;\n  cursor: pointer;\n}\n.primary-controls-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.type-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  background: rgba(8, 9, 14, 0.6);\n  padding: 4px;\n  border-radius: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n}\n.type-pill[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #94a3b8;\n  font-weight: 700;\n  font-size: 0.8rem;\n  padding: 8px 14px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.type-pill.selected[_ngcontent-%COMP%] {\n  background: rgba(245, 197, 24, 0.2);\n  color: #f5c518;\n}\n.sorting-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n.sort-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #94a3b8;\n  font-weight: 700;\n}\n.sort-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.sort-pill[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  color: #cbd5e1;\n  font-size: 0.76rem;\n  font-weight: 700;\n  padding: 7px 12px;\n  border-radius: 999px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sort-pill.active[_ngcontent-%COMP%] {\n  background: rgba(245, 197, 24, 0.22);\n  border-color: #f5c518;\n  color: #f5c518;\n}\n.sort-pill.critic-sort.active[_ngcontent-%COMP%] {\n  background: rgba(255, 51, 102, 0.22);\n  border-color: #ff3366;\n  color: #ff6b93;\n}\n.sort-pill.normal-sort.active[_ngcontent-%COMP%] {\n  background: rgba(0, 229, 255, 0.2);\n  border-color: #00e5ff;\n  color: #38ecff;\n}\n.sort-direction-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(245, 197, 24, 0.32);\n  background: rgba(245, 197, 24, 0.1);\n  color: #f5c518;\n  font-size: 0.75rem;\n  font-weight: 800;\n  padding: 7px 12px;\n  border-radius: 999px;\n  cursor: pointer;\n}\n.category-carousel[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 4px;\n}\n.cat-chip[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 15px;\n  border-radius: 999px;\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  background: rgba(255, 255, 255, 0.04);\n  color: #cbd5e1;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.cat-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.09);\n}\n.cat-chip.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f5c518 0%,\n      #d99b00 100%);\n  color: #090a0f;\n  border-color: #f5c518;\n  box-shadow: 0 4px 14px rgba(245, 197, 24, 0.3);\n}\n.advanced-filters-drawer[_ngcontent-%COMP%] {\n  padding-top: 14px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.adv-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.adv-title[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.pill-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n.mini-pill[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  color: #cbd5e1;\n  font-size: 0.76rem;\n  font-weight: 700;\n  padding: 6px 12px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.mini-pill.active[_ngcontent-%COMP%] {\n  background: rgba(245, 197, 24, 0.2);\n  border-color: #f5c518;\n  color: #f5c518;\n}\n.mini-pill.critic.active[_ngcontent-%COMP%] {\n  background: rgba(255, 51, 102, 0.22);\n  border-color: #ff3366;\n  color: #ff6b93;\n}\n.mini-pill.normal.active[_ngcontent-%COMP%] {\n  background: rgba(0, 229, 255, 0.2);\n  border-color: #00e5ff;\n  color: #38ecff;\n}\n.adv-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 6px;\n}\n.results-counter[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.reset-filters-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #ff5c85;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.movies-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));\n  gap: 22px;\n}\n.movie-card[_ngcontent-%COMP%] {\n  background: rgba(18, 21, 34, 0.82);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 22px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),\n    border-color 0.28s ease,\n    box-shadow 0.28s ease;\n}\n.movie-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  border-color: rgba(245, 197, 24, 0.45);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 24px rgba(245, 197, 24, 0.12);\n}\n.poster-container[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 2/3;\n  width: 100%;\n  overflow: hidden;\n  background: #121521;\n}\n.poster-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.movie-card[_ngcontent-%COMP%]:hover   .poster-img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.poster-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 50%,\n      rgba(8, 9, 14, 0.92) 100%);\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  padding: 16px;\n  opacity: 0;\n  transition: opacity 0.25s ease;\n}\n.movie-card[_ngcontent-%COMP%]:hover   .poster-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.view-cta[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #f5c518;\n  background: rgba(8, 9, 14, 0.85);\n  padding: 7px 14px;\n  border-radius: 999px;\n  border: 1px solid rgba(245, 197, 24, 0.4);\n}\n.card-type-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  background: rgba(8, 9, 14, 0.82);\n  color: #f5c518;\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(245, 197, 24, 0.35);\n}\n.card-type-badge.series[_ngcontent-%COMP%] {\n  color: #38ecff;\n  border-color: rgba(0, 229, 255, 0.35);\n}\n.card-total-score[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  padding: 5px 10px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 800;\n  background: rgba(8, 9, 14, 0.86);\n  color: #ffffff;\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n}\n.card-meta-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.72rem;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.card-genres[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #f8fafc;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dual-score-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(8, 9, 14, 0.65);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  padding: 8px 10px;\n  margin-top: auto;\n}\n.score-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.chip-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.chip-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.chip-role[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: #94a3b8;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.score-chip.critic[_ngcontent-%COMP%]   .chip-num[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 800;\n  color: #ff5c85;\n}\n.score-chip.normal[_ngcontent-%COMP%]   .chip-num[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 800;\n  color: #38ecff;\n}\n.score-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.card-footer-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.7rem;\n  color: #64748b;\n  font-weight: 600;\n}\n.consensus-indicator[_ngcontent-%COMP%] {\n  color: #f5c518;\n  font-weight: 700;\n}\n.loading-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));\n  gap: 22px;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 410px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.03) 25%,\n      rgba(255, 255, 255, 0.08) 50%,\n      rgba(255, 255, 255, 0.03) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.empty-catalog[_ngcontent-%COMP%] {\n  padding: 48px 24px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.empty-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 8px;\n}\n@media (max-width: 768px) {\n  .explore-wrapper[_ngcontent-%COMP%] {\n    padding: calc(74px + env(safe-area-inset-top)) 12px calc(110px + env(safe-area-inset-bottom));\n    gap: 16px;\n  }\n  .hero-poster-preview[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-showcase[_ngcontent-%COMP%] {\n    padding: 18px;\n    min-height: 0;\n    border-radius: 22px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .hero-synopsis[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    -webkit-line-clamp: 3;\n  }\n  .hero-rating-split[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 8px;\n  }\n  .split-box[_ngcontent-%COMP%] {\n    padding: 8px;\n    gap: 6px;\n    flex-direction: column;\n    text-align: center;\n    border-radius: 14px;\n  }\n  .split-icon[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .split-val[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .split-lbl[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  .hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .hero-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 13px;\n  }\n  .btn-glass-cycle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .control-hub[_ngcontent-%COMP%] {\n    padding: 14px;\n    gap: 12px;\n    border-radius: 20px;\n  }\n  .search-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n  }\n  .search-input[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .tmdb-sync-btn[_ngcontent-%COMP%], \n   .filter-toggle-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .primary-controls-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .type-pills[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .type-pill[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 9px 6px;\n  }\n  .sorting-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .sort-pills[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    width: 100%;\n    padding-bottom: 4px;\n  }\n  .sort-pill[_ngcontent-%COMP%], \n   .sort-direction-btn[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    flex-shrink: 0;\n  }\n  .adv-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .movies-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 12px;\n  }\n  .movie-card[_ngcontent-%COMP%] {\n    border-radius: 18px;\n  }\n  .card-body[_ngcontent-%COMP%] {\n    padding: 10px;\n    gap: 8px;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 0.88rem;\n  }\n  .card-type-badge[_ngcontent-%COMP%] {\n    top: 8px;\n    left: 8px;\n    font-size: 0.58rem;\n    padding: 3px 7px;\n  }\n  .card-total-score[_ngcontent-%COMP%] {\n    top: 8px;\n    right: 8px;\n    font-size: 0.7rem;\n    padding: 4px 7px;\n  }\n  .dual-score-strip[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n  }\n  .chip-icon[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .chip-role[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n  }\n  .score-chip.critic[_ngcontent-%COMP%]   .chip-num[_ngcontent-%COMP%], \n   .score-chip.normal[_ngcontent-%COMP%]   .chip-num[_ngcontent-%COMP%] {\n    font-size: 0.74rem;\n  }\n  .card-footer-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 2px;\n    font-size: 0.64rem;\n  }\n  .poster-overlay[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .loading-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 12px;\n  }\n  .skeleton-card[_ngcontent-%COMP%] {\n    height: 290px;\n  }\n}\n/*# sourceMappingURL=explore.page.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExplorePage, { className: "ExplorePage", filePath: "src\\app\\pages\\explore\\explore.page.ts", lineNumber: 1200 });
})();
export {
  ExplorePage
};
//# sourceMappingURL=chunk-HFDX54DW.js.map
