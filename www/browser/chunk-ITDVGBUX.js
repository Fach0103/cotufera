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
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
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
  ɵɵtextInterpolate2,
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

// src/app/pages/community/community.page.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function CommunityPage_section_40_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.currentUser.role === "critic" ? "badge-critic" : "badge-audience");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Publicando como: ", ctx_r1.currentUser.name, " (", ctx_r1.currentUser.role === "critic" ? "Cr\xEDtico" : "Usuario Normal", ") ");
  }
}
function CommunityPage_section_40_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function CommunityPage_section_40_div_8_div_1_Template_div_click_0_listener() {
      const m_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedMovieTmdbId = m_r4.tmdbId);
    });
    \u0275\u0275element(1, "img", 43);
    \u0275\u0275elementStart(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.selectedMovieTmdbId === m_r4.tmdbId);
    \u0275\u0275advance();
    \u0275\u0275property("src", m_r4.coverUrl, \u0275\u0275sanitizeUrl)("alt", m_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.title);
  }
}
function CommunityPage_section_40_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, CommunityPage_section_40_div_8_div_1_Template, 4, 5, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.movies);
  }
}
function CommunityPage_section_40_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function CommunityPage_section_40_button_16_Template_button_click_0_listener() {
      const n_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.score = n_r6);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.form.score === n_r6)("critic", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.role) === "critic" && ctx_r1.form.score === n_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r6, " ");
  }
}
function CommunityPage_section_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 25)(1, "div", 26)(2, "div")(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CommunityPage_section_40_span_7_Template, 2, 4, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CommunityPage_section_40_div_8_Template, 2, 1, "div", 29);
    \u0275\u0275elementStart(9, "div", 30)(10, "div", 31)(11, "span");
    \u0275\u0275text(12, "Puntaje otorgado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 32);
    \u0275\u0275template(16, CommunityPage_section_40_button_16_Template, 2, 5, "button", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 34)(18, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function CommunityPage_section_40_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.headline, $event) || (ctx_r1.form.headline = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 36);
    \u0275\u0275twoWayListener("ngModelChange", function CommunityPage_section_40_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.text, $event) || (ctx_r1.form.text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 37)(21, "button", 38);
    \u0275\u0275listener("click", function CommunityPage_section_40_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelStudio());
    });
    \u0275\u0275text(22, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 39);
    \u0275\u0275listener("click", function CommunityPage_section_40_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveReview());
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingComment ? "\u270F\uFE0F MODO EDICI\xD3N" : "\u{1F3AC} NUEVA VALORACI\xD3N");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingComment ? "Editar Opini\xF3n y Puntaje" : "Selecciona una Pel\xEDcula o Serie y Calif\xEDcala", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.editingComment);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("\u2B50 ", ctx_r1.form.score, " / 10 \u2014 ", ctx_r1.cotufera.getScoreLabel(ctx_r1.form.score), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.headline);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.text);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingComment ? "\u{1F4BE} Actualizar Comentario y Puntaje" : "\u{1F680} Publicar Comentario", " ");
  }
}
function CommunityPage_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 47);
    \u0275\u0275listener("click", function CommunityPage_div_41_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.statusMsg = "");
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.statusMsg);
  }
}
function CommunityPage_article_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275listener("click", function CommunityPage_article_43_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openMovie((item_r10.movieId == null ? null : item_r10.movieId.tmdbId) || item_r10.tmdbId));
    });
    \u0275\u0275element(1, "img", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r10.movieId.coverUrl, \u0275\u0275sanitizeUrl)("alt", item_r10.movieId.title);
  }
}
function CommunityPage_article_43_h4_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u201C", item_r10.headline, "\u201D");
  }
}
function CommunityPage_article_43_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "button", 68);
    \u0275\u0275listener("click", function CommunityPage_article_43_div_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const item_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startEdit(item_r10));
    });
    \u0275\u0275text(2, "\u270F\uFE0F Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 69);
    \u0275\u0275listener("click", function CommunityPage_article_43_div_25_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const item_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteItem(item_r10));
    });
    \u0275\u0275text(4, "\u{1F5D1}\uFE0F Borrar");
    \u0275\u0275elementEnd()();
  }
}
function CommunityPage_article_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 48);
    \u0275\u0275template(1, CommunityPage_article_43_div_1_Template, 2, 2, "div", 49);
    \u0275\u0275elementStart(2, "div", 50)(3, "div", 51)(4, "div", 52);
    \u0275\u0275listener("click", function CommunityPage_article_43_Template_div_click_4_listener() {
      const item_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openMovie((item_r10.movieId == null ? null : item_r10.movieId.tmdbId) || item_r10.tmdbId));
    });
    \u0275\u0275elementStart(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 55);
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "small");
    \u0275\u0275text(12, "/10");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, CommunityPage_article_43_h4_13_Template, 2, 1, "h4", 56);
    \u0275\u0275elementStart(14, "p", 57);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 58)(17, "div", 59)(18, "span", 60);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 61)(21, "span", 62);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, CommunityPage_article_43_div_25_Template, 5, 0, "div", 63);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("critic-card", (item_r10.userId == null ? null : item_r10.userId.role) === "critic");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r10.movieId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((item_r10.movieId == null ? null : item_r10.movieId.mediaType) === "tv" ? "\u{1F4FA} SERIE" : "\u{1F3AC} PEL\xCDCULA");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((item_r10.movieId == null ? null : item_r10.movieId.title) || "T\xEDtulo #" + item_r10.tmdbId);
    \u0275\u0275advance();
    \u0275\u0275classProp("critic", (item_r10.userId == null ? null : item_r10.userId.role) === "critic");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2605 ", item_r10.score, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", item_r10.headline);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.text);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.cotufera.getAvatarPreset(item_r10.userId == null ? null : item_r10.userId.avatar, item_r10.userId == null ? null : item_r10.userId.role).gradient);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cotufera.getAvatarPreset(item_r10.userId == null ? null : item_r10.userId.avatar, item_r10.userId == null ? null : item_r10.userId.role).emoji, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((item_r10.userId == null ? null : item_r10.userId.name) || "Cin\xE9filo");
    \u0275\u0275advance();
    \u0275\u0275classMap((item_r10.userId == null ? null : item_r10.userId.role) === "critic" ? "badge-critic" : "badge-audience");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (item_r10.userId == null ? null : item_r10.userId.role) === "critic" ? "\u{1F3A9} Cr\xEDtico" : "\u{1F37F} Usuario", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMine(item_r10));
  }
}
var CommunityPage = class _CommunityPage {
  constructor(cotufera, router) {
    this.cotufera = cotufera;
    this.router = router;
    this.comments = [];
    this.movies = [];
    this.currentUser = null;
    this.searchQuery = "";
    this.roleFilter = "all";
    this.showComposer = false;
    this.editingComment = null;
    this.selectedMovieTmdbId = 693134;
    this.statusMsg = "";
    this.form = {
      score: 9,
      headline: "",
      text: ""
    };
  }
  ngOnInit() {
    this.cotufera.currentUser$.subscribe((u) => this.currentUser = u);
    this.loadData();
  }
  ionViewWillEnter() {
    this.loadData();
  }
  loadData() {
    this.cotufera.getAllComments().subscribe((list) => this.comments = list);
    this.cotufera.getMovies({}).subscribe((mList) => {
      this.movies = mList;
      if (mList.length > 0 && !this.selectedMovieTmdbId) {
        this.selectedMovieTmdbId = mList[0].tmdbId;
      }
    });
  }
  get globalCriticAvg() {
    const critics = this.comments.filter((c) => c.userId?.role === "critic");
    if (!critics.length)
      return "0.0";
    const sum = critics.reduce((a, b) => a + Number(b.score || 0), 0);
    return (sum / critics.length).toFixed(1);
  }
  get globalNormalAvg() {
    const normals = this.comments.filter((c) => c.userId?.role !== "critic");
    if (!normals.length)
      return "0.0";
    const sum = normals.reduce((a, b) => a + Number(b.score || 0), 0);
    return (sum / normals.length).toFixed(1);
  }
  get filteredComments() {
    return this.comments.filter((c) => {
      if (this.roleFilter !== "all" && (c.userId?.role || "normal") !== this.roleFilter) {
        return false;
      }
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase();
        const inMovie = (c.movieId?.title || "").toLowerCase().includes(q);
        const inUser = (c.userId?.name || "").toLowerCase().includes(q);
        const inText = (c.text || "").toLowerCase().includes(q) || (c.headline || "").toLowerCase().includes(q);
        if (!inMovie && !inUser && !inText)
          return false;
      }
      return true;
    });
  }
  toggleComposer() {
    if (!this.currentUser) {
      this.router.navigate(["/perfil"]);
      return;
    }
    this.editingComment = null;
    this.form = { score: 9, headline: "", text: "" };
    this.showComposer = !this.showComposer;
  }
  isMine(item) {
    const authorId = item.userId?._id || item.userId;
    return !!this.currentUser && String(authorId) === String(this.currentUser._id);
  }
  startEdit(item) {
    this.editingComment = item;
    this.form = {
      score: item.score,
      headline: item.headline || "",
      text: item.text
    };
    this.showComposer = true;
  }
  cancelStudio() {
    this.showComposer = false;
    this.editingComment = null;
  }
  saveReview() {
    if (!this.form.text.trim())
      return;
    if (this.editingComment) {
      this.cotufera.updateComment(this.editingComment._id, {
        score: this.form.score,
        headline: this.form.headline,
        text: this.form.text
      }).subscribe(() => {
        this.statusMsg = "\u2705 Rese\xF1a actualizada y promedios de la pel\xEDcula recalculados.";
        this.showComposer = false;
        this.editingComment = null;
        this.loadData();
      });
    } else {
      const picked = this.movies.find((m) => m.tmdbId === this.selectedMovieTmdbId);
      this.cotufera.createComment(this.selectedMovieTmdbId, {
        score: this.form.score,
        headline: this.form.headline,
        text: this.form.text,
        mediaType: picked?.mediaType || "movie"
      }).subscribe(() => {
        this.statusMsg = "\u2705 Nueva rese\xF1a publicada con \xE9xito.";
        this.showComposer = false;
        this.loadData();
      });
    }
  }
  deleteItem(item) {
    this.cotufera.deleteComment(item._id).subscribe(() => {
      this.statusMsg = "\u{1F5D1}\uFE0F Rese\xF1a eliminada y estad\xEDsticas recalculadas.";
      this.comments = this.comments.filter((c) => c._id !== item._id);
    });
  }
  openMovie(tmdbId) {
    if (!tmdbId)
      return;
    this.router.navigate(["/pelicula", tmdbId]);
  }
  static {
    this.\u0275fac = function CommunityPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommunityPage)(\u0275\u0275directiveInject(CotuferaService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommunityPage, selectors: [["app-community"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 16, consts: [[3, "fullscreen"], [1, "community-wrapper"], [1, "hub-banner", "glass-panel"], [1, "banner-left"], [1, "eyebrow"], [1, "page-title", "font-display"], [1, "page-desc"], [1, "banner-stats"], [1, "stat-pill", "gold"], [1, "stat-num"], [1, "stat-lbl"], [1, "stat-pill", "crimson"], [1, "stat-pill", "cyan"], [1, "controls-bar", "glass-panel"], [1, "search-input-wrap"], ["type", "text", "placeholder", "Buscar rese\xF1a por pel\xEDcula, serie, autor o palabra clave...", 3, "ngModelChange", "ngModel"], [1, "role-tabs"], ["type", "button", 1, "r-tab", 3, "click"], ["type", "button", 1, "r-tab", "critic", 3, "click"], ["type", "button", 1, "r-tab", "normal", 3, "click"], ["type", "button", 1, "btn-compose-toggle", 3, "click"], ["class", "studio-drawer glass-panel", 4, "ngIf"], ["class", "status-banner", 4, "ngIf"], [1, "reviews-masonry"], ["class", "review-showcase-card glass-panel", 3, "critic-card", 4, "ngFor", "ngForOf"], [1, "studio-drawer", "glass-panel"], [1, "studio-header"], [1, "studio-title", "font-display"], [3, "class", 4, "ngIf"], ["class", "movie-picker-carousel", 4, "ngIf"], [1, "score-dial-box"], [1, "dial-top"], [1, "dial-row"], ["type", "button", "class", "dial-btn", 3, "active", "critic", "click", 4, "ngFor", "ngForOf"], [1, "studio-fields"], ["type", "text", "placeholder", "Titular de tu opini\xF3n (ej. Una joya imprescindible del g\xE9nero)", 1, "studio-input", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Comparte tu cr\xEDtica u opini\xF3n sobre la historia, actuaciones y puesta en escena...", 1, "studio-textarea", 3, "ngModelChange", "ngModel"], [1, "studio-actions"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "button", 1, "btn-save-gold", 3, "click"], [1, "movie-picker-carousel"], ["class", "mini-movie-tile", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "mini-movie-tile", 3, "click"], [3, "src", "alt"], [1, "mini-title"], ["type", "button", 1, "dial-btn", 3, "click"], [1, "status-banner"], ["type", "button", 3, "click"], [1, "review-showcase-card", "glass-panel"], ["class", "movie-side", 3, "click", 4, "ngIf"], [1, "review-content-side"], [1, "review-top-row"], [1, "movie-badge-link", 3, "click"], [1, "m-type"], [1, "m-name"], [1, "score-medal"], ["class", "r-headline", 4, "ngIf"], [1, "r-text"], [1, "review-bottom-row"], [1, "r-user"], [1, "u-ava"], [1, "u-details"], [1, "u-name"], ["class", "r-crud-actions", 4, "ngIf"], [1, "movie-side", 3, "click"], [1, "mini-poster", 3, "src", "alt"], [1, "r-headline"], [1, "r-crud-actions"], ["type", "button", 1, "act-btn", "edit", 3, "click"], ["type", "button", 1, "act-btn", "del", 3, "click"]], template: function CommunityPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "PULSO CINEMATOGR\xC1FICO \xB7 CRUD DE COMENTARIOS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1", 5);
        \u0275\u0275text(7, "Muro de Cr\xEDticas y Opiniones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, " Explora, publica, edita o elimina rese\xF1as con puntajes del 1 al 10. Cada cambio recalcula en tiempo real la brecha entre Cr\xEDticos Especializados y Usuarios Normales. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "span", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15, "Rese\xF1as Totales");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 11)(17, "span", 9);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 10);
        \u0275\u0275text(20, "Media Cr\xEDticos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 12)(22, "span", 9);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 10);
        \u0275\u0275text(25, "Media Usuarios");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "section", 13)(27, "div", 14)(28, "span");
        \u0275\u0275text(29, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function CommunityPage_Template_input_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 16)(32, "button", 17);
        \u0275\u0275listener("click", function CommunityPage_Template_button_click_32_listener() {
          return ctx.roleFilter = "all";
        });
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 18);
        \u0275\u0275listener("click", function CommunityPage_Template_button_click_34_listener() {
          return ctx.roleFilter = "critic";
        });
        \u0275\u0275text(35, " \u{1F3A9} Cr\xEDticos ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "button", 19);
        \u0275\u0275listener("click", function CommunityPage_Template_button_click_36_listener() {
          return ctx.roleFilter = "normal";
        });
        \u0275\u0275text(37, " \u{1F37F} Usuarios ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "button", 20);
        \u0275\u0275listener("click", function CommunityPage_Template_button_click_38_listener() {
          return ctx.toggleComposer();
        });
        \u0275\u0275text(39);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(40, CommunityPage_section_40_Template, 25, 11, "section", 21)(41, CommunityPage_div_41_Template, 5, 1, "div", 22);
        \u0275\u0275elementStart(42, "section", 23);
        \u0275\u0275template(43, CommunityPage_article_43_Template, 26, 18, "article", 24);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("fullscreen", true);
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.comments.length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\u{1F3A9} ", ctx.globalCriticAvg, "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\u{1F37F} ", ctx.globalNormalAvg, "");
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.roleFilter === "all");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Todas (", ctx.comments.length, ") ");
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.roleFilter === "critic");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.roleFilter === "normal");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.showComposer ? "\u2715 Cerrar Estudio" : "\u2728 + Nueva Rese\xF1a / Opini\xF3n", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showComposer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.statusMsg);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.filteredComments);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IonContent], styles: ['@charset "UTF-8";\n\n\n\n.community-wrapper[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 82px 16px 115px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.hub-banner[_ngcontent-%COMP%] {\n  padding: 26px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n.banner-left[_ngcontent-%COMP%] {\n  max-width: 650px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  color: #f5c518;\n  display: block;\n  margin-bottom: 6px;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: clamp(1.5rem, 3vw, 2.1rem);\n  font-weight: 800;\n}\n.page-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #94a3b8;\n  line-height: 1.55;\n}\n.banner-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.stat-pill[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border-radius: 18px;\n  background: rgba(8, 9, 14, 0.72);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 115px;\n}\n.stat-pill.gold[_ngcontent-%COMP%] {\n  border-color: rgba(245, 197, 24, 0.38);\n}\n.stat-pill.crimson[_ngcontent-%COMP%] {\n  border-color: rgba(255, 51, 102, 0.4);\n}\n.stat-pill.cyan[_ngcontent-%COMP%] {\n  border-color: rgba(0, 229, 255, 0.38);\n}\n.stat-num[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #fff;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #94a3b8;\n  font-weight: 700;\n  margin-top: 2px;\n}\n.controls-bar[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.search-input-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(8, 9, 14, 0.75);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 14px;\n  padding: 10px 14px;\n}\n.search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  background: transparent;\n  color: #fff;\n  font-size: 0.88rem;\n  outline: none;\n}\n.role-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  background: rgba(8, 9, 14, 0.6);\n  padding: 4px;\n  border-radius: 999px;\n}\n.r-tab[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #94a3b8;\n  font-size: 0.78rem;\n  font-weight: 700;\n  padding: 7px 14px;\n  border-radius: 999px;\n  cursor: pointer;\n}\n.r-tab.active[_ngcontent-%COMP%] {\n  background: rgba(245, 197, 24, 0.2);\n  color: #f5c518;\n}\n.r-tab.critic.active[_ngcontent-%COMP%] {\n  background: rgba(255, 51, 102, 0.22);\n  color: #ff5c85;\n}\n.r-tab.normal.active[_ngcontent-%COMP%] {\n  background: rgba(0, 229, 255, 0.2);\n  color: #38ecff;\n}\n.btn-compose-toggle[_ngcontent-%COMP%] {\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #f5c518,\n      #e09f00);\n  color: #08090e;\n  font-weight: 800;\n  font-size: 0.84rem;\n  padding: 11px 18px;\n  border-radius: 14px;\n  cursor: pointer;\n}\n.studio-drawer[_ngcontent-%COMP%] {\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  border-color: rgba(245, 197, 24, 0.35);\n}\n.studio-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.studio-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n}\n.movie-picker-carousel[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  overflow-x: auto;\n  padding-bottom: 8px;\n}\n.mini-movie-tile[_ngcontent-%COMP%] {\n  width: 105px;\n  flex-shrink: 0;\n  border-radius: 14px;\n  overflow: hidden;\n  border: 2px solid transparent;\n  background: rgba(8, 9, 14, 0.8);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.mini-movie-tile.selected[_ngcontent-%COMP%] {\n  border-color: #f5c518;\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(245, 197, 24, 0.3);\n}\n.mini-movie-tile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n  display: block;\n}\n.mini-title[_ngcontent-%COMP%] {\n  display: block;\n  padding: 6px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n}\n.score-dial-box[_ngcontent-%COMP%] {\n  background: rgba(8, 9, 14, 0.65);\n  padding: 14px;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.dial-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.84rem;\n}\n.dial-top[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f5c518;\n}\n.dial-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 6px;\n}\n.dial-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.04);\n  color: #cbd5e1;\n  font-weight: 800;\n  padding: 10px 0;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.dial-btn.active[_ngcontent-%COMP%] {\n  background: #00e5ff;\n  color: #08090e;\n  border-color: #00e5ff;\n}\n.dial-btn.critic.active[_ngcontent-%COMP%] {\n  background: #ff3366;\n  color: #fff;\n  border-color: #ff3366;\n}\n.studio-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.studio-input[_ngcontent-%COMP%], \n.studio-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(8, 9, 14, 0.78);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 12px;\n  padding: 12px 14px;\n  color: #fff;\n  font-family: inherit;\n  font-size: 0.88rem;\n  outline: none;\n}\n.studio-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  background: transparent;\n  color: #cbd5e1;\n  font-weight: 700;\n  padding: 10px 16px;\n  border-radius: 12px;\n  cursor: pointer;\n}\n.btn-save-gold[_ngcontent-%COMP%] {\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #f5c518,\n      #e09f00);\n  color: #08090e;\n  font-weight: 800;\n  padding: 10px 20px;\n  border-radius: 12px;\n  cursor: pointer;\n}\n.status-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-radius: 14px;\n  background: rgba(16, 185, 129, 0.16);\n  border: 1px solid rgba(16, 185, 129, 0.35);\n  color: #34d399;\n  font-size: 0.85rem;\n  font-weight: 700;\n}\n.status-banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #34d399;\n  cursor: pointer;\n}\n.reviews-masonry[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(min(100%, 360px), 1fr));\n  gap: 18px;\n}\n.review-showcase-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  gap: 16px;\n  border-left: 4px solid #00e5ff;\n}\n.review-showcase-card.critic-card[_ngcontent-%COMP%] {\n  border-left-color: #ff3366;\n}\n.movie-side[_ngcontent-%COMP%] {\n  width: 92px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.mini-poster[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 136px;\n  object-fit: cover;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n}\n.review-content-side[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n}\n.review-top-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n}\n.movie-badge-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n}\n.m-type[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 800;\n  color: #94a3b8;\n}\n.m-name[_ngcontent-%COMP%] {\n  font-size: 0.96rem;\n  font-weight: 800;\n  color: #f5c518;\n}\n.score-medal[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 10px;\n  font-size: 0.88rem;\n  font-weight: 800;\n  background: rgba(0, 229, 255, 0.15);\n  color: #38ecff;\n  flex-shrink: 0;\n}\n.score-medal.critic[_ngcontent-%COMP%] {\n  background: rgba(255, 51, 102, 0.18);\n  color: #ff5c85;\n}\n.r-headline[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.88rem;\n  font-weight: 800;\n  color: #f8fafc;\n}\n.r-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.83rem;\n  color: #cbd5e1;\n  line-height: 1.5;\n}\n.review-bottom-row[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 8px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.r-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.u-ava[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n}\n.u-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.u-name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.r-crud-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.act-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  color: #cbd5e1;\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 4px 9px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.act-btn.edit[_ngcontent-%COMP%]:hover {\n  border-color: #f5c518;\n  color: #f5c518;\n}\n.act-btn.del[_ngcontent-%COMP%]:hover {\n  border-color: #ef4444;\n  color: #f87171;\n}\n@media (max-width: 600px) {\n  .community-wrapper[_ngcontent-%COMP%] {\n    padding: calc(74px + env(safe-area-inset-top)) 12px calc(110px + env(safe-area-inset-bottom));\n    gap: 14px;\n  }\n  .hub-banner[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .banner-stats[_ngcontent-%COMP%] {\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 8px;\n  }\n  .stat-pill[_ngcontent-%COMP%] {\n    min-width: 0;\n    padding: 10px 6px;\n  }\n  .stat-num[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .controls-bar[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .search-input-wrap[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n  .search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .studio-input[_ngcontent-%COMP%], \n   .studio-textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .role-tabs[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .r-tab[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 8px 6px;\n  }\n  .btn-compose-toggle[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 13px;\n  }\n  .studio-drawer[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .studio-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .studio-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 13px;\n  }\n  .reviews-masonry[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .review-showcase-card[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 12px;\n  }\n  .movie-side[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n  .mini-poster[_ngcontent-%COMP%] {\n    height: 104px;\n  }\n  .review-bottom-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .dial-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\n/*# sourceMappingURL=community.page.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommunityPage, { className: "CommunityPage", filePath: "src\\app\\pages\\community\\community.page.ts", lineNumber: 719 });
})();
export {
  CommunityPage
};
//# sourceMappingURL=chunk-ITDVGBUX.js.map
