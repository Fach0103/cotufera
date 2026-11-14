import {
  ActivatedRoute,
  CommonModule,
  CotuferaService,
  DatePipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
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

// src/app/pages/movie-detail/movie-detail.page.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function MovieDetailPage_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r3);
  }
}
function MovieDetailPage_div_1_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1, " T\xEDtulo original: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.movie.originalTitle);
  }
}
function MovieDetailPage_div_1_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u201C", ctx_r1.movie.tagline, "\u201D");
  }
}
function MovieDetailPage_div_1_div_115_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275element(1, "img", 76);
    \u0275\u0275elementStart(2, "div", 77);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 78);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const actor_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", actor_r4.photoUrl, \u0275\u0275sanitizeUrl)("alt", actor_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(actor_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(actor_r4.character);
  }
}
function MovieDetailPage_div_1_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275template(1, MovieDetailPage_div_1_div_115_div_1_Template, 6, 4, "div", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.movie.castDetails);
  }
}
function MovieDetailPage_div_1_ng_template_116_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const actorName_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3AD} ", actorName_r5, "");
  }
}
function MovieDetailPage_div_1_ng_template_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275template(1, MovieDetailPage_div_1_ng_template_116_span_1_Template, 2, 1, "span", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.movie.actors);
  }
}
function MovieDetailPage_div_1_div_118_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275listener("click", function MovieDetailPage_div_1_div_118_div_7_Template_div_click_0_listener() {
      const img_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedBackdrop = img_r7);
    });
    \u0275\u0275element(1, "img", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.selectedBackdrop === img_r7);
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r7, \u0275\u0275sanitizeUrl);
  }
}
function MovieDetailPage_div_1_div_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 54)(2, "h3", 26);
    \u0275\u0275text(3, "\u{1F5BC}\uFE0F Galer\xEDa Visual e Im\xE1genes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 55);
    \u0275\u0275text(5, "Toca una imagen para cambiar el fondo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 83);
    \u0275\u0275template(7, MovieDetailPage_div_1_div_118_div_7_Template, 2, 3, "div", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.movie.gallery);
  }
}
function MovieDetailPage_div_1_div_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "span", 88);
    \u0275\u0275text(2, "\u{1F511}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 89)(4, "h3");
    \u0275\u0275text(5, "\xBFQuieres dejar tu opini\xF3n y puntaje?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Inicia sesi\xF3n o reg\xEDstrate para publicar rese\xF1as. Puedes seguir viendo toda la informaci\xF3n sin cuenta.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 90);
    \u0275\u0275listener("click", function MovieDetailPage_div_1_div_120_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goLogin());
    });
    \u0275\u0275text(9, "Iniciar sesi\xF3n / Registrarme");
    \u0275\u0275elementEnd()();
  }
}
function MovieDetailPage_div_1_div_121_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "span", 114);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("critic", ctx_r1.currentUser.role === "critic");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentUser.role === "critic" ? "\u{1F3A9} Calificando como Cr\xEDtico" : "\u{1F37F} Calificando como Usuario", " ");
  }
}
function MovieDetailPage_div_1_div_121_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 115);
    \u0275\u0275listener("click", function MovieDetailPage_div_1_div_121_button_15_Template_button_click_0_listener() {
      const num_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reviewForm.score = num_r11);
    });
    \u0275\u0275elementStart(1, "span", 116);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 117);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const num_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.reviewForm.score === num_r11)("high", num_r11 >= 8 && ctx_r1.reviewForm.score >= num_r11)("critic-mode", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.role) === "critic" && ctx_r1.reviewForm.score >= num_r11);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(num_r11);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.reviewForm.score >= num_r11 ? "\u2605" : "\u2606");
  }
}
function MovieDetailPage_div_1_div_121_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 118);
    \u0275\u0275listener("click", function MovieDetailPage_div_1_div_121_button_19_Template_button_click_0_listener() {
      const phrase_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reviewForm.headline = phrase_r13);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const phrase_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" + ", phrase_r13, " ");
  }
}
function MovieDetailPage_div_1_div_121_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 119);
    \u0275\u0275listener("click", function MovieDetailPage_div_1_div_121_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(1, " Cancelar edici\xF3n ");
    \u0275\u0275elementEnd();
  }
}
function MovieDetailPage_div_1_div_121_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("error", ctx_r1.feedbackError);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.feedbackMsg, " ");
  }
}
function MovieDetailPage_div_1_div_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92)(2, "div")(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, MovieDetailPage_div_1_div_121_div_7_Template, 3, 3, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 94)(9, "div", 95)(10, "span", 96);
    \u0275\u0275text(11, "Selecciona tu Puntaje (1 al 10):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 97);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 98);
    \u0275\u0275template(15, MovieDetailPage_div_1_div_121_button_15_Template, 5, 8, "button", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 100)(17, "span", 101);
    \u0275\u0275text(18, "Ideas r\xE1pidas:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, MovieDetailPage_div_1_div_121_button_19_Template, 2, 1, "button", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 103)(21, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function MovieDetailPage_div_1_div_121_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.reviewForm.headline, $event) || (ctx_r1.reviewForm.headline = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "textarea", 105);
    \u0275\u0275twoWayListener("ngModelChange", function MovieDetailPage_div_1_div_121_Template_textarea_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.reviewForm.text, $event) || (ctx_r1.reviewForm.text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 106)(24, "label", 107);
    \u0275\u0275listener("click", function MovieDetailPage_div_1_div_121_Template_label_click_24_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reviewForm.containsSpoilers = !ctx_r1.reviewForm.containsSpoilers);
    });
    \u0275\u0275elementStart(25, "span", 108);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Contiene spoilers de la trama");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 109);
    \u0275\u0275template(30, MovieDetailPage_div_1_div_121_button_30_Template, 2, 0, "button", 110);
    \u0275\u0275elementStart(31, "button", 111);
    \u0275\u0275listener("click", function MovieDetailPage_div_1_div_121_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitReview());
    });
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, MovieDetailPage_div_1_div_121_div_33_Template, 2, 3, "div", 112);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingCommentId ? "\u270F\uFE0F EDITANDO RESE\xD1A EXISTENTE" : "\u2728 PUBLICAR OPINI\xD3N Y PUNTAJE", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingCommentId ? "Actualizar tu Calificaci\xF3n y Comentario" : "\xBFQu\xE9 te pareci\xF3 " + ctx_r1.movie.title + "?", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentUser);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("critic", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.role) === "critic");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u2B50 ", ctx_r1.reviewForm.score, "/10 \u2014 ", ctx_r1.cotufera.getScoreLabel(ctx_r1.reviewForm.score), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(20, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.quickPhrases);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reviewForm.headline);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reviewForm.text);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("checked", ctx_r1.reviewForm.containsSpoilers);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.reviewForm.containsSpoilers ? "\u2713" : "", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingCommentId);
    \u0275\u0275advance();
    \u0275\u0275classProp("critic-btn", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.role) === "critic");
    \u0275\u0275property("disabled", ctx_r1.submittingReview);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submittingReview ? "Guardando..." : ctx_r1.editingCommentId ? "\u{1F4BE} Guardar Cambios en Rese\xF1a" : "\u{1F680} Publicar Opini\xF3n y Puntaje (" + ctx_r1.reviewForm.score + "/10)", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.feedbackMsg);
  }
}
function MovieDetailPage_div_1_div_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "p");
    \u0275\u0275text(2, "A\xFAn no hay rese\xF1as en esta categor\xEDa. \xA1S\xE9 el primero en compartir tu opini\xF3n y puntaje arriba!");
    \u0275\u0275elementEnd()();
  }
}
function MovieDetailPage_div_1_article_134_h4_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 140);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u201C", c_r15.headline, "\u201D");
  }
}
function MovieDetailPage_div_1_article_134_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 141)(1, "span");
    \u0275\u0275text(2, "\u26A0\uFE0F Esta rese\xF1a contiene spoilers.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 142);
    \u0275\u0275listener("click", function MovieDetailPage_div_1_article_134_div_22_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r16);
      const c_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.revealedSpoilers[c_r15._id] = true);
    });
    \u0275\u0275text(4, "Mostrar rese\xF1a");
    \u0275\u0275elementEnd()();
  }
}
function MovieDetailPage_div_1_article_134_p_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 143);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r15.text, " ");
  }
}
function MovieDetailPage_div_1_article_134_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144)(1, "button", 145);
    \u0275\u0275listener("click", function MovieDetailPage_div_1_article_134_div_27_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const c_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEditComment(c_r15));
    });
    \u0275\u0275text(2, " \u270F\uFE0F Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 146);
    \u0275\u0275listener("click", function MovieDetailPage_div_1_article_134_div_27_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r17);
      const c_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeComment(c_r15));
    });
    \u0275\u0275text(4, " \u{1F5D1}\uFE0F Eliminar ");
    \u0275\u0275elementEnd()();
  }
}
function MovieDetailPage_div_1_article_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 122)(1, "div", 123)(2, "div", 124)(3, "div", 125);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 126)(6, "div", 127)(7, "span", 128);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 129);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 130)(15, "span", 131);
    \u0275\u0275text(16, "\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 132);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 133);
    \u0275\u0275text(20, "/10");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(21, MovieDetailPage_div_1_article_134_h4_21_Template, 2, 1, "h4", 134)(22, MovieDetailPage_div_1_article_134_div_22_Template, 5, 0, "div", 135)(23, MovieDetailPage_div_1_article_134_p_23_Template, 2, 1, "p", 136);
    \u0275\u0275elementStart(24, "div", 137)(25, "span", 138);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, MovieDetailPage_div_1_article_134_div_27_Template, 5, 0, "div", 139);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("critic-border", (c_r15.userId == null ? null : c_r15.userId.role) === "critic")("normal-border", (c_r15.userId == null ? null : c_r15.userId.role) !== "critic");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.cotufera.getAvatarPreset(c_r15.userId == null ? null : c_r15.userId.avatar, c_r15.userId == null ? null : c_r15.userId.role).gradient);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cotufera.getAvatarPreset(c_r15.userId == null ? null : c_r15.userId.avatar, c_r15.userId == null ? null : c_r15.userId.role).emoji, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((c_r15.userId == null ? null : c_r15.userId.name) || "Usuario Cotufera");
    \u0275\u0275advance();
    \u0275\u0275classMap((c_r15.userId == null ? null : c_r15.userId.role) === "critic" ? "badge-critic" : "badge-audience");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (c_r15.userId == null ? null : c_r15.userId.role) === "critic" ? "\u{1F3A9} Cr\xEDtico" : "\u{1F37F} Usuario Normal", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (c_r15.userId == null ? null : c_r15.userId.specialty) || ((c_r15.userId == null ? null : c_r15.userId.role) === "critic" ? "Cr\xEDtica Especializada" : "Audiencia General"), " \xB7 ", \u0275\u0275pipeBind2(13, 21, c_r15.createdAt, "mediumDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("critic", (c_r15.userId == null ? null : c_r15.userId.role) === "critic");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r15.score);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", c_r15.headline);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r15.containsSpoilers && !ctx_r1.revealedSpoilers[c_r15._id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !c_r15.containsSpoilers || ctx_r1.revealedSpoilers[c_r15._id]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cotufera.getScoreLabel(c_r15.score));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMine(c_r15));
  }
}
function MovieDetailPage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "section", 5)(2, "div", 6)(3, "button", 7);
    \u0275\u0275listener("click", function MovieDetailPage_div_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(4, " \u2190 Volver al Cat\xE1logo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 9)(8, "div", 10)(9, "div", 11);
    \u0275\u0275element(10, "img", 12);
    \u0275\u0275elementStart(11, "span", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 14)(14, "div", 15)(15, "span", 16);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MovieDetailPage_div_1_span_17_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h1", 18);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, MovieDetailPage_div_1_p_20_Template, 4, 1, "p", 19)(21, MovieDetailPage_div_1_p_21_Template, 2, 1, "p", 20);
    \u0275\u0275elementStart(22, "div", 21)(23, "div", 22)(24, "span", 23);
    \u0275\u0275text(25, "\u{1F4C5} Fecha de Publicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 24);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 22)(29, "span", 23);
    \u0275\u0275text(30, "\u23F1\uFE0F Duraci\xF3n / Formato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 24);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 22)(34, "span", 23);
    \u0275\u0275text(35, "\u{1F3AC} Direcci\xF3n / Creaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 24);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 22)(39, "span", 23);
    \u0275\u0275text(40, "\u{1F3DB}\uFE0F Estudio / Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 24);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 22)(44, "span", 23);
    \u0275\u0275text(45, "\u{1F310} Idioma / TMDB Global");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 24);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 25)(49, "h3", 26);
    \u0275\u0275text(50, "\u{1F4D6} Sinopsis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p", 27);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(53, "section", 28)(54, "div", 29)(55, "div")(56, "span", 30);
    \u0275\u0275text(57, "TERM\xD3METRO DE CALIFICACIONES COTUFERA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "h2", 31);
    \u0275\u0275text(59, "Diferencia: Cr\xEDticos Especializados vs. Usuarios Normales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 32);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 33)(63, "div", 34)(64, "div", 35)(65, "span", 36);
    \u0275\u0275text(66, "\u2B50 PROMEDIO GENERAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 37);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 38)(70, "span", 39);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 40);
    \u0275\u0275text(73, "/ 10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 41);
    \u0275\u0275element(75, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p", 43);
    \u0275\u0275text(77, "Calificaci\xF3n global ponderando todas las rese\xF1as registradas en Cotufera.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 44)(79, "div", 35)(80, "span", 45);
    \u0275\u0275text(81, "\u{1F3A9} RATING CR\xCDTICOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span", 37);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 38)(85, "span", 46);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 40);
    \u0275\u0275text(88, "/ 10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 41);
    \u0275\u0275element(90, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "p", 43);
    \u0275\u0275text(92, "Evaluaci\xF3n t\xE9cnica de direcci\xF3n, narrativa, fotograf\xEDa y montaje por cr\xEDticos verificados.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 48)(94, "div", 35)(95, "span", 49);
    \u0275\u0275text(96, "\u{1F37F} RATING USUARIOS NORMALES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "span", 37);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 38)(100, "span", 50);
    \u0275\u0275text(101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span", 40);
    \u0275\u0275text(103, "/ 10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 41);
    \u0275\u0275element(105, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "p", 43);
    \u0275\u0275text(107, "Satisfacci\xF3n, entretenimiento e impacto emocional calificado por la audiencia general.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(108, "section", 52)(109, "div", 53)(110, "div", 54)(111, "h3", 26);
    \u0275\u0275text(112, "\u{1F3AD} Reparto Principal y Actores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "span", 55);
    \u0275\u0275text(114);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(115, MovieDetailPage_div_1_div_115_Template, 2, 1, "div", 56)(116, MovieDetailPage_div_1_ng_template_116_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(118, MovieDetailPage_div_1_div_118_Template, 8, 1, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "section", 58);
    \u0275\u0275template(120, MovieDetailPage_div_1_div_120_Template, 10, 0, "div", 59)(121, MovieDetailPage_div_1_div_121_Template, 34, 21, "div", 60);
    \u0275\u0275elementStart(122, "div", 61)(123, "h3", 62);
    \u0275\u0275text(124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "div", 63)(126, "button", 64);
    \u0275\u0275listener("click", function MovieDetailPage_div_1_Template_button_click_126_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCommentFilter("all"));
    });
    \u0275\u0275text(127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "button", 65);
    \u0275\u0275listener("click", function MovieDetailPage_div_1_Template_button_click_128_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCommentFilter("critic"));
    });
    \u0275\u0275text(129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "button", 66);
    \u0275\u0275listener("click", function MovieDetailPage_div_1_Template_button_click_130_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCommentFilter("normal"));
    });
    \u0275\u0275text(131);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(132, MovieDetailPage_div_1_div_132_Template, 3, 0, "div", 67);
    \u0275\u0275elementStart(133, "div", 68);
    \u0275\u0275template(134, MovieDetailPage_div_1_article_134_Template, 28, 24, "article", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const simpleActors_r18 = \u0275\u0275reference(117);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "linear-gradient(180deg, rgba(8,9,14,0.35) 0%, rgba(8,9,14,0.88) 70%, #08090e 100%), url(" + (ctx_r1.selectedBackdrop || ctx_r1.movie.backdropUrl || ctx_r1.movie.coverUrl) + ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u2713 Guardada en Base de Datos Local \xB7 TMDB #", ctx_r1.movie.tmdbId, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.movie.coverUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r1.movie.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("series", ctx_r1.movie.mediaType === "tv");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.movie.mediaType === "tv" ? "\u{1F4FA} SERIE DE TV" : "\u{1F3AC} PEL\xCDCULA", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.movie.certification || "+13");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.movie.genres);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.movie.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.movie.originalTitle && ctx_r1.movie.originalTitle !== ctx_r1.movie.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.movie.tagline);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.movie.releaseDate || "No disponible");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.movie.mediaType === "tv" ? (ctx_r1.movie.seasons || 1) + " Temp \xB7 " + (ctx_r1.movie.runtime || 50) + "m/ep" : (ctx_r1.movie.runtime || 120) + " minutos", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.movie.director || "Direcci\xF3n Internacional");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.movie.studio, " \xB7 ", ctx_r1.movie.status || "Estrenada", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.movie.originalLanguage || "EN", " \xB7 \u2B50 ", ctx_r1.movie.tmdbScore || 7.5, " TMDB");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.movie.synopsis);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getComparisonVerdict(), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", (ctx_r1.movie.stats == null ? null : ctx_r1.movie.stats.totalReviews) || 0, " opiniones totales");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.movie.stats == null ? null : ctx_r1.movie.stats.averageScore) || "0.0");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ((ctx_r1.movie.stats == null ? null : ctx_r1.movie.stats.averageScore) || 0) * 10, "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", (ctx_r1.movie.stats == null ? null : ctx_r1.movie.stats.criticCount) || 0, " rese\xF1as de cr\xEDticos");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.movie.stats == null ? null : ctx_r1.movie.stats.criticScore) || "0.0");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ((ctx_r1.movie.stats == null ? null : ctx_r1.movie.stats.criticScore) || 0) * 10, "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", (ctx_r1.movie.stats == null ? null : ctx_r1.movie.stats.normalCount) || 0, " rese\xF1as del p\xFAblico");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.movie.stats == null ? null : ctx_r1.movie.stats.normalScore) || "0.0");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ((ctx_r1.movie.stats == null ? null : ctx_r1.movie.stats.normalScore) || 0) * 10, "%");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", (ctx_r1.movie.actors == null ? null : ctx_r1.movie.actors.length) || 0, " int\xE9rpretes destacados");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.movie.castDetails && ctx_r1.movie.castDetails.length > 0)("ngIfElse", simpleActors_r18);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.movie.gallery && ctx_r1.movie.gallery.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.currentUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentUser);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \u{1F4AC} Opiniones de la Comunidad (", ctx_r1.filteredComments.length, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.commentRoleFilter === "all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Todas (", ctx_r1.comments.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.commentRoleFilter === "critic");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F3A9} Cr\xEDticos (", ctx_r1.criticCommentsCount, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.commentRoleFilter === "normal");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F37F} Usuarios (", ctx_r1.normalCommentsCount, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredComments.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredComments);
  }
}
function MovieDetailPage_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "div", 148);
    \u0275\u0275text(2, "\u{1F37F}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Cargando informaci\xF3n de la pel\xEDcula y rese\xF1as desde Cotufera...");
    \u0275\u0275elementEnd()();
  }
}
var MovieDetailPage = class _MovieDetailPage {
  constructor(route, router, cotufera) {
    this.route = route;
    this.router = router;
    this.cotufera = cotufera;
    this.movie = null;
    this.comments = [];
    this.commentRoleFilter = "all";
    this.selectedBackdrop = "";
    this.currentUser = null;
    this.editingCommentId = null;
    this.submittingReview = false;
    this.feedbackMsg = "";
    this.feedbackError = false;
    this.revealedSpoilers = {};
    this.reviewForm = {
      score: 9,
      headline: "",
      text: "",
      containsSpoilers: false
    };
    this.quickPhrases = [
      "Obra maestra visual y narrativa",
      "Entretenimiento puro de principio a fin",
      "Actuaciones memorables y gran guion",
      "Visualmente impecable pero ritmo denso",
      "Super\xF3 todas mis expectativas"
    ];
  }
  ngOnInit() {
    this.cotufera.currentUser$.subscribe((u) => {
      this.currentUser = u;
    });
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get("id"));
      const type = this.route.snapshot.queryParamMap.get("type") || "movie";
      if (id) {
        this.loadMovieAndComments(id, type);
      }
    });
  }
  get filteredComments() {
    if (this.commentRoleFilter === "all")
      return this.comments;
    return this.comments.filter((c) => (c.userId?.role || "normal") === this.commentRoleFilter);
  }
  get criticCommentsCount() {
    return this.comments.filter((c) => c.userId?.role === "critic").length;
  }
  get normalCommentsCount() {
    return this.comments.filter((c) => c.userId?.role !== "critic").length;
  }
  loadMovieAndComments(tmdbId, type) {
    this.cotufera.getMovieById(tmdbId, type).subscribe({
      next: (m) => {
        this.movie = m;
        this.selectedBackdrop = m.backdropUrl || m.coverUrl;
      }
    });
    this.loadComments(tmdbId);
  }
  loadComments(tmdbId) {
    this.cotufera.getMovieComments(tmdbId, "all").subscribe({
      next: (list) => {
        this.comments = list;
      }
    });
  }
  setCommentFilter(role) {
    this.commentRoleFilter = role;
  }
  getComparisonVerdict() {
    if (!this.movie?.stats)
      return "Sin suficientes calificaciones a\xFAn";
    const c = this.movie.stats.criticScore || 0;
    const n = this.movie.stats.normalScore || 0;
    if (!c && !n)
      return "S\xE9 el primero en inaugurar el marcador";
    if (c > 0 && n === 0)
      return "Calificada por Cr\xEDticos \xB7 Esperando audiencia";
    if (n > 0 && c === 0)
      return "Calificada por Usuarios \xB7 Esperando cr\xEDticos";
    const diff = Number((c - n).toFixed(1));
    if (Math.abs(diff) <= 0.8) {
      return `\u{1F91D} Consenso Un\xE1nime (Diferencia de solo ${Math.abs(diff)} pts)`;
    }
    if (diff > 0) {
      return `\u{1F3A9} Preferida por los Cr\xEDticos (+${diff} pts sobre Usuarios)`;
    }
    return `\u{1F37F} Favorita de los Usuarios Normales (+${Math.abs(diff)} pts sobre Cr\xEDticos)`;
  }
  isMine(comment) {
    const authorId = comment.userId?._id || comment.userId;
    return !!this.currentUser && String(authorId) === String(this.currentUser._id);
  }
  goLogin() {
    this.router.navigate(["/perfil"]);
  }
  submitReview() {
    if (!this.movie)
      return;
    if (!this.reviewForm.text.trim()) {
      this.feedbackError = true;
      this.feedbackMsg = "Por favor escribe tu opini\xF3n antes de publicar.";
      return;
    }
    this.submittingReview = true;
    this.feedbackMsg = "";
    this.feedbackError = false;
    if (this.editingCommentId) {
      this.cotufera.updateComment(this.editingCommentId, {
        score: this.reviewForm.score,
        headline: this.reviewForm.headline,
        text: this.reviewForm.text,
        containsSpoilers: this.reviewForm.containsSpoilers
      }).subscribe({
        next: (res) => {
          this.submittingReview = false;
          this.editingCommentId = null;
          if (res.movieStats && this.movie) {
            this.movie.stats = res.movieStats;
          }
          this.resetForm();
          this.loadComments(this.movie.tmdbId);
          this.feedbackMsg = "\u2713 Rese\xF1a actualizada y promedios recalculados al instante.";
        },
        error: (err) => {
          this.submittingReview = false;
          this.feedbackError = true;
          this.feedbackMsg = err.error?.message || "No se pudo actualizar la rese\xF1a.";
        }
      });
    } else {
      this.cotufera.createComment(this.movie.tmdbId, {
        score: this.reviewForm.score,
        headline: this.reviewForm.headline,
        text: this.reviewForm.text,
        containsSpoilers: this.reviewForm.containsSpoilers,
        mediaType: this.movie.mediaType
      }).subscribe({
        next: (res) => {
          this.submittingReview = false;
          if (res.movieStats && this.movie) {
            this.movie.stats = res.movieStats;
          }
          this.resetForm();
          this.loadComments(this.movie.tmdbId);
          this.feedbackMsg = "\u2713 \xA1Tu rese\xF1a y puntaje se han publicado! Los promedios de Cr\xEDticos y Usuarios se actualizaron.";
        },
        error: (err) => {
          this.submittingReview = false;
          this.feedbackError = true;
          this.feedbackMsg = err.error?.message || "Error publicando la rese\xF1a.";
        }
      });
    }
  }
  startEditComment(comment) {
    this.editingCommentId = comment._id;
    this.reviewForm = {
      score: comment.score,
      headline: comment.headline || "",
      text: comment.text,
      containsSpoilers: Boolean(comment.containsSpoilers)
    };
    this.feedbackMsg = "Editando rese\xF1a seleccionada. Modifica el puntaje o texto y guarda los cambios.";
    this.feedbackError = false;
  }
  cancelEdit() {
    this.editingCommentId = null;
    this.resetForm();
    this.feedbackMsg = "";
  }
  removeComment(comment) {
    this.cotufera.deleteComment(comment._id).subscribe({
      next: (res) => {
        if (res.movieStats && this.movie) {
          this.movie.stats = res.movieStats;
        }
        this.comments = this.comments.filter((c) => c._id !== comment._id);
        this.feedbackError = false;
        this.feedbackMsg = "\u{1F5D1}\uFE0F Rese\xF1a eliminada y promedios recalculados.";
      }
    });
  }
  resetForm() {
    this.reviewForm = {
      score: 9,
      headline: "",
      text: "",
      containsSpoilers: false
    };
  }
  goBack() {
    this.router.navigate(["/explorar"]);
  }
  static {
    this.\u0275fac = function MovieDetailPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MovieDetailPage)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CotuferaService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MovieDetailPage, selectors: [["app-movie-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [["loadingTpl", ""], ["simpleActors", ""], [3, "fullscreen"], ["class", "detail-wrapper", 4, "ngIf", "ngIfElse"], [1, "detail-wrapper"], [1, "backdrop-hero"], [1, "top-nav-row"], ["type", "button", 1, "back-glass-btn", 3, "click"], [1, "db-saved-pill"], [1, "hero-main-grid"], [1, "poster-column"], [1, "poster-frame"], [1, "main-cover-img", 3, "src", "alt"], [1, "media-ribbon"], [1, "info-column"], [1, "genre-tags-row"], [1, "cert-badge"], ["class", "genre-tag", 4, "ngFor", "ngForOf"], [1, "detail-title", "font-display"], ["class", "original-title", 4, "ngIf"], ["class", "tagline", 4, "ngIf"], [1, "quick-specs-grid"], [1, "spec-item"], [1, "spec-label"], [1, "spec-value"], [1, "synopsis-card", "glass-panel"], [1, "section-subtitle"], [1, "synopsis-text"], [1, "ratings-comparison-section", "glass-panel"], [1, "comp-header"], [1, "comp-eyebrow"], [1, "comp-title", "font-display"], [1, "verdict-pill"], [1, "comp-cards-grid"], [1, "meter-card", "general"], [1, "meter-top"], [1, "meter-badge", "gold"], [1, "meter-count"], [1, "meter-score-row"], [1, "big-score", "gold"], [1, "out-of"], [1, "progress-track"], [1, "progress-fill", "gold"], [1, "meter-desc"], [1, "meter-card", "critic"], [1, "meter-badge", "crimson"], [1, "big-score", "crimson"], [1, "progress-fill", "crimson"], [1, "meter-card", "normal"], [1, "meter-badge", "cyan"], [1, "big-score", "cyan"], [1, "progress-fill", "cyan"], [1, "media-and-cast-grid"], [1, "cast-panel", "glass-panel"], [1, "panel-header"], [1, "sub-hint"], ["class", "actors-scroll", 4, "ngIf", "ngIfElse"], ["class", "gallery-panel glass-panel", 4, "ngIf"], [1, "reviews-hub-section"], ["class", "guest-cta glass-panel", 4, "ngIf"], ["class", "composer-card glass-panel", 4, "ngIf"], [1, "comments-feed-header"], [1, "feed-title", "font-display"], [1, "feed-filter-tabs"], ["type", "button", 1, "feed-tab", 3, "click"], ["type", "button", 1, "feed-tab", "critic", 3, "click"], ["type", "button", 1, "feed-tab", "normal", 3, "click"], ["class", "empty-comments glass-panel", 4, "ngIf"], [1, "comments-list"], ["class", "comment-card glass-panel", 3, "critic-border", "normal-border", 4, "ngFor", "ngForOf"], [1, "genre-tag"], [1, "original-title"], [1, "tagline"], [1, "actors-scroll"], ["class", "actor-card", 4, "ngFor", "ngForOf"], [1, "actor-card"], [1, "actor-photo", 3, "src", "alt"], [1, "actor-name"], [1, "actor-char"], [1, "simple-actors-list"], ["class", "actor-chip", 4, "ngFor", "ngForOf"], [1, "actor-chip"], [1, "gallery-panel", "glass-panel"], [1, "gallery-thumbs"], ["class", "thumb-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "thumb-item", 3, "click"], ["alt", "Fotograma de la pel\xEDcula", 3, "src"], [1, "guest-cta", "glass-panel"], [1, "cta-emoji"], [1, "cta-text"], ["type", "button", 1, "btn-submit-review", 3, "click"], [1, "composer-card", "glass-panel"], [1, "composer-top"], ["class", "active-role-indicator", 4, "ngIf"], [1, "interactive-score-picker"], [1, "picker-header"], [1, "picker-title"], [1, "picker-dynamic-badge"], [1, "score-buttons-row"], ["type", "button", "class", "score-tile", 3, "selected", "high", "critic-mode", "click", 4, "ngFor", "ngForOf"], [1, "inspiration-chips"], [1, "chips-label"], ["type", "button", "class", "idea-chip", 3, "click", 4, "ngFor", "ngForOf"], [1, "editorial-inputs"], ["type", "text", "placeholder", "Titular breve de tu rese\xF1a (ej. Una obra maestra de principio a fin)", 1, "editorial-headline-input", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Escribe tu opini\xF3n detallada sobre la trama, actuaciones, direcci\xF3n o entretenimiento...", 1, "editorial-textarea", 3, "ngModelChange", "ngModel"], [1, "composer-footer"], [1, "spoiler-toggle", 3, "click"], [1, "toggle-box"], [1, "composer-btns"], ["type", "button", "class", "btn-cancel-edit", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-submit-review", 3, "click", "disabled"], ["class", "feedback-toast", 3, "error", 4, "ngIf"], [1, "active-role-indicator"], [1, "role-badge-live"], ["type", "button", 1, "score-tile", 3, "click"], [1, "tile-num"], [1, "tile-star"], ["type", "button", 1, "idea-chip", 3, "click"], ["type", "button", 1, "btn-cancel-edit", 3, "click"], [1, "feedback-toast"], [1, "empty-comments", "glass-panel"], [1, "comment-card", "glass-panel"], [1, "comment-card-top"], [1, "author-block"], [1, "author-avatar"], [1, "author-info"], [1, "author-name-row"], [1, "author-name"], [1, "author-sub"], [1, "comment-score-pill"], [1, "score-star"], [1, "score-num"], [1, "score-ten"], ["class", "comment-headline", 4, "ngIf"], ["class", "spoiler-warning", 4, "ngIf"], ["class", "comment-body", 4, "ngIf"], [1, "comment-actions-bar"], [1, "sentiment-tag"], ["class", "crud-btns", 4, "ngIf"], [1, "comment-headline"], [1, "spoiler-warning"], ["type", "button", 3, "click"], [1, "comment-body"], [1, "crud-btns"], ["type", "button", 1, "crud-action-btn", "edit", 3, "click"], ["type", "button", 1, "crud-action-btn", "delete", 3, "click"], [1, "loading-detail"], [1, "spinner-popcorn"]], template: function MovieDetailPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-content", 2);
        \u0275\u0275template(1, MovieDetailPage_div_1_Template, 135, 52, "div", 3)(2, MovieDetailPage_ng_template_2_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const loadingTpl_r19 = \u0275\u0275reference(3);
        \u0275\u0275property("fullscreen", true);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.movie)("ngIfElse", loadingTpl_r19);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IonContent], styles: ['@charset "UTF-8";\n\n\n\n.detail-wrapper[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 66px 16px 120px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.backdrop-hero[_ngcontent-%COMP%] {\n  border-radius: 0 0 32px 32px;\n  background-size: cover;\n  background-position: center top;\n  padding: 24px 28px 34px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);\n}\n.top-nav-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 24px;\n}\n.back-glass-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  background: rgba(8, 9, 14, 0.72);\n  color: #f8fafc;\n  font-weight: 700;\n  font-size: 0.82rem;\n  padding: 9px 16px;\n  border-radius: 999px;\n  cursor: pointer;\n  backdrop-filter: blur(12px);\n}\n.db-saved-pill[_ngcontent-%COMP%] {\n  padding: 6px 13px;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  background: rgba(16, 185, 129, 0.16);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.35);\n  backdrop-filter: blur(10px);\n}\n.hero-main-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 32px;\n  align-items: start;\n}\n.poster-frame[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 22px;\n  overflow: hidden;\n  border: 2px solid rgba(255, 255, 255, 0.16);\n  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.85);\n}\n.main-cover-img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.media-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n  right: 12px;\n  text-align: center;\n  padding: 6px;\n  border-radius: 10px;\n  font-size: 0.72rem;\n  font-weight: 800;\n  background: rgba(8, 9, 14, 0.88);\n  color: #f5c518;\n  border: 1px solid rgba(245, 197, 24, 0.4);\n  backdrop-filter: blur(8px);\n}\n.media-ribbon.series[_ngcontent-%COMP%] {\n  color: #38ecff;\n  border-color: rgba(0, 229, 255, 0.4);\n}\n.info-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.genre-tags-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.cert-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 0.72rem;\n  font-weight: 800;\n  background: rgba(245, 197, 24, 0.22);\n  color: #f5c518;\n  border: 1px solid rgba(245, 197, 24, 0.4);\n}\n.genre-tag[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: rgba(255, 255, 255, 0.1);\n  color: #f1f5f9;\n  backdrop-filter: blur(8px);\n}\n.detail-title[_ngcontent-%COMP%] {\n  font-size: clamp(1.9rem, 4vw, 3rem);\n  font-weight: 800;\n  margin: 0;\n  line-height: 1.08;\n}\n.original-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #94a3b8;\n}\n.tagline[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-style: italic;\n  color: #f5c518;\n  font-weight: 600;\n}\n.quick-specs-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));\n  gap: 10px;\n  margin-top: 4px;\n}\n.spec-item[_ngcontent-%COMP%] {\n  background: rgba(12, 14, 22, 0.78);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.spec-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #94a3b8;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.spec-value[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n  font-weight: 700;\n  color: #f8fafc;\n}\n.synopsis-card[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  margin-top: 4px;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #f8fafc;\n}\n.synopsis-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.94rem;\n  line-height: 1.65;\n  color: #cbd5e1;\n}\n.ratings-comparison-section[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.comp-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.comp-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  color: #f5c518;\n  display: block;\n  margin-bottom: 4px;\n}\n.comp-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 800;\n}\n.verdict-pill[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 999px;\n  background: rgba(245, 197, 24, 0.14);\n  border: 1px solid rgba(245, 197, 24, 0.38);\n  color: #f5c518;\n  font-size: 0.82rem;\n  font-weight: 800;\n}\n.comp-cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 18px;\n}\n.meter-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 20px;\n  background: rgba(10, 12, 20, 0.72);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.meter-card.general[_ngcontent-%COMP%] {\n  border-color: rgba(245, 197, 24, 0.35);\n}\n.meter-card.critic[_ngcontent-%COMP%] {\n  border-color: rgba(255, 51, 102, 0.4);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 51, 102, 0.08) 0%,\n      rgba(10, 12, 20, 0.75) 100%);\n}\n.meter-card.normal[_ngcontent-%COMP%] {\n  border-color: rgba(0, 229, 255, 0.38);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 229, 255, 0.08) 0%,\n      rgba(10, 12, 20, 0.75) 100%);\n}\n.meter-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.meter-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n  padding: 4px 10px;\n  border-radius: 999px;\n}\n.meter-badge.gold[_ngcontent-%COMP%] {\n  background: rgba(245, 197, 24, 0.18);\n  color: #f5c518;\n}\n.meter-badge.crimson[_ngcontent-%COMP%] {\n  background: rgba(255, 51, 102, 0.2);\n  color: #ff5c85;\n}\n.meter-badge.cyan[_ngcontent-%COMP%] {\n  background: rgba(0, 229, 255, 0.18);\n  color: #38ecff;\n}\n.meter-count[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.meter-score-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.big-score[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.big-score.gold[_ngcontent-%COMP%] {\n  color: #f5c518;\n}\n.big-score.crimson[_ngcontent-%COMP%] {\n  color: #ff5c85;\n}\n.big-score.cyan[_ngcontent-%COMP%] {\n  color: #38ecff;\n}\n.out-of[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #64748b;\n  font-weight: 700;\n}\n.progress-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.07);\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.progress-fill.gold[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f5c518,\n      #fb923c);\n}\n.progress-fill.crimson[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ff3366,\n      #fb7185);\n}\n.progress-fill.cyan[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #00e5ff,\n      #38bdf8);\n}\n.meter-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.78rem;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.media-and-cast-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n}\n.cast-panel[_ngcontent-%COMP%], \n.gallery-panel[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.sub-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.actors-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  overflow-x: auto;\n  padding-bottom: 6px;\n}\n.actor-card[_ngcontent-%COMP%] {\n  width: 130px;\n  flex-shrink: 0;\n  background: rgba(10, 12, 20, 0.7);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  padding: 10px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.actor-photo[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 76px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgba(245, 197, 24, 0.35);\n}\n.actor-name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: #f8fafc;\n  line-height: 1.2;\n}\n.actor-char[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #94a3b8;\n  line-height: 1.2;\n}\n.simple-actors-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.actor-chip[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.06);\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.gallery-thumbs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n}\n.thumb-item[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  overflow: hidden;\n  border: 2px solid transparent;\n  cursor: pointer;\n  aspect-ratio: 16/9;\n  transition: all 0.2s ease;\n}\n.thumb-item.active[_ngcontent-%COMP%], \n.thumb-item[_ngcontent-%COMP%]:hover {\n  border-color: #f5c518;\n  transform: scale(1.02);\n}\n.thumb-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.reviews-hub-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.composer-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  border: 1px solid rgba(245, 197, 24, 0.22);\n}\n.composer-top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.active-role-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.role-badge-live[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 999px;\n  font-size: 0.76rem;\n  font-weight: 800;\n  background: rgba(0, 229, 255, 0.16);\n  color: #38ecff;\n  border: 1px solid rgba(0, 229, 255, 0.35);\n}\n.role-badge-live.critic[_ngcontent-%COMP%] {\n  background: rgba(255, 51, 102, 0.18);\n  color: #ff5c85;\n  border-color: rgba(255, 51, 102, 0.4);\n}\n.switch-role-mini[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  background: rgba(255, 255, 255, 0.06);\n  color: #cbd5e1;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 6px 11px;\n  border-radius: 999px;\n  cursor: pointer;\n}\n.interactive-score-picker[_ngcontent-%COMP%] {\n  background: rgba(8, 9, 14, 0.65);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 18px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.picker-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.picker-title[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #cbd5e1;\n}\n.picker-dynamic-badge[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n  font-weight: 800;\n  color: #38ecff;\n}\n.picker-dynamic-badge.critic[_ngcontent-%COMP%] {\n  color: #ff5c85;\n}\n.score-buttons-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 8px;\n}\n.score-tile[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  color: #94a3b8;\n  border-radius: 14px;\n  padding: 10px 4px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  transition: all 0.18s ease;\n}\n.score-tile[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: rgba(245, 197, 24, 0.5);\n}\n.score-tile.selected[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00e5ff,\n      #0284c7);\n  color: #08090e;\n  border-color: #00e5ff;\n  box-shadow: 0 6px 18px rgba(0, 229, 255, 0.35);\n  transform: scale(1.06);\n}\n.score-tile.critic-mode.selected[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff3366,\n      #be123c);\n  color: #ffffff;\n  border-color: #ff3366;\n  box-shadow: 0 6px 18px rgba(255, 51, 102, 0.4);\n}\n.tile-num[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n}\n.tile-star[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.inspiration-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 7px;\n}\n.chips-label[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #94a3b8;\n  font-weight: 700;\n}\n.idea-chip[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  color: #cbd5e1;\n  font-size: 0.73rem;\n  font-weight: 600;\n  padding: 5px 11px;\n  border-radius: 999px;\n  cursor: pointer;\n}\n.idea-chip[_ngcontent-%COMP%]:hover {\n  border-color: #f5c518;\n  color: #f5c518;\n}\n.editorial-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.editorial-headline-input[_ngcontent-%COMP%], \n.editorial-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(8, 9, 14, 0.72);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 14px;\n  padding: 13px 16px;\n  color: #f8fafc;\n  font-family: inherit;\n  font-size: 0.9rem;\n  outline: none;\n}\n.editorial-headline-input[_ngcontent-%COMP%]:focus, \n.editorial-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #f5c518;\n}\n.composer-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.spoiler-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 0.82rem;\n  color: #cbd5e1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-box[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 800;\n}\n.toggle-box.checked[_ngcontent-%COMP%] {\n  background: #f5c518;\n  color: #08090e;\n  border-color: #f5c518;\n}\n.composer-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.btn-cancel-edit[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  background: transparent;\n  color: #cbd5e1;\n  font-weight: 700;\n  padding: 11px 16px;\n  border-radius: 12px;\n  cursor: pointer;\n}\n.btn-submit-review[_ngcontent-%COMP%] {\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #00e5ff 0%,\n      #0284c7 100%);\n  color: #08090e;\n  font-weight: 800;\n  font-size: 0.86rem;\n  padding: 12px 22px;\n  border-radius: 14px;\n  cursor: pointer;\n  box-shadow: 0 8px 20px rgba(0, 229, 255, 0.25);\n}\n.btn-submit-review.critic-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff3366 0%,\n      #be123c 100%);\n  color: #ffffff;\n  box-shadow: 0 8px 20px rgba(255, 51, 102, 0.3);\n}\n.feedback-toast[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 12px;\n  background: rgba(16, 185, 129, 0.16);\n  border: 1px solid rgba(16, 185, 129, 0.35);\n  color: #34d399;\n  font-size: 0.84rem;\n  font-weight: 600;\n}\n.feedback-toast.error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.16);\n  border-color: rgba(239, 68, 68, 0.35);\n  color: #f87171;\n}\n.comments-feed-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.feed-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n}\n.feed-filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  background: rgba(16, 19, 30, 0.8);\n  padding: 4px;\n  border-radius: 999px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.feed-tab[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #94a3b8;\n  font-size: 0.78rem;\n  font-weight: 700;\n  padding: 7px 14px;\n  border-radius: 999px;\n  cursor: pointer;\n}\n.feed-tab.active[_ngcontent-%COMP%] {\n  background: rgba(245, 197, 24, 0.2);\n  color: #f5c518;\n}\n.feed-tab.critic.active[_ngcontent-%COMP%] {\n  background: rgba(255, 51, 102, 0.22);\n  color: #ff5c85;\n}\n.feed-tab.normal.active[_ngcontent-%COMP%] {\n  background: rgba(0, 229, 255, 0.18);\n  color: #38ecff;\n}\n.comments-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.comment-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  border-left: 4px solid transparent;\n}\n.comment-card.critic-border[_ngcontent-%COMP%] {\n  border-left-color: #ff3366;\n}\n.comment-card.normal-border[_ngcontent-%COMP%] {\n  border-left-color: #00e5ff;\n}\n.comment-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.author-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.author-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.35rem;\n}\n.author-name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.author-name[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #f8fafc;\n}\n.author-sub[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #94a3b8;\n}\n.comment-score-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 3px;\n  padding: 8px 14px;\n  border-radius: 14px;\n  background: rgba(0, 229, 255, 0.14);\n  border: 1px solid rgba(0, 229, 255, 0.35);\n  color: #38ecff;\n}\n.comment-score-pill.critic[_ngcontent-%COMP%] {\n  background: rgba(255, 51, 102, 0.16);\n  border-color: rgba(255, 51, 102, 0.4);\n  color: #ff5c85;\n}\n.score-num[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n}\n.score-ten[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  opacity: 0.75;\n}\n.comment-headline[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #f5c518;\n}\n.comment-body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.92rem;\n  line-height: 1.6;\n  color: #e2e8f0;\n}\n.spoiler-warning[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 12px;\n  background: rgba(245, 158, 11, 0.14);\n  border: 1px solid rgba(245, 158, 11, 0.35);\n  color: #fbbf24;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.82rem;\n}\n.spoiler-warning[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: #fbbf24;\n  color: #08090e;\n  font-weight: 800;\n  padding: 5px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.comment-actions-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 8px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.sentiment-tag[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.crud-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.crud-action-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  color: #cbd5e1;\n  font-size: 0.74rem;\n  font-weight: 700;\n  padding: 5px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.crud-action-btn.edit[_ngcontent-%COMP%]:hover {\n  border-color: #f5c518;\n  color: #f5c518;\n}\n.crud-action-btn.delete[_ngcontent-%COMP%]:hover {\n  border-color: #ef4444;\n  color: #f87171;\n}\n.loading-detail[_ngcontent-%COMP%] {\n  padding: 150px 20px;\n  text-align: center;\n  color: #94a3b8;\n}\n.spinner-popcorn[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 12px;\n}\n@media (max-width: 768px) {\n  .detail-wrapper[_ngcontent-%COMP%] {\n    padding: calc(60px + env(safe-area-inset-top)) 12px calc(110px + env(safe-area-inset-bottom));\n    gap: 16px;\n  }\n  .backdrop-hero[_ngcontent-%COMP%] {\n    padding: 16px 14px 22px;\n    border-radius: 0 0 24px 24px;\n  }\n  .top-nav-row[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n  .db-saved-pill[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-main-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 18px;\n  }\n  .poster-column[_ngcontent-%COMP%] {\n    max-width: 190px;\n    margin: 0 auto;\n  }\n  .detail-title[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n    text-align: center;\n  }\n  .original-title[_ngcontent-%COMP%], \n   .tagline[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .genre-tags-row[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .quick-specs-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .ratings-comparison-section[_ngcontent-%COMP%], \n   .cast-panel[_ngcontent-%COMP%], \n   .gallery-panel[_ngcontent-%COMP%], \n   .composer-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .comp-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .comp-cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .big-score[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n  .gallery-thumbs[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .score-buttons-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, 1fr);\n  }\n  .composer-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .composer-btns[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-submit-review[_ngcontent-%COMP%], \n   .btn-cancel-edit[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 14px;\n  }\n  .editorial-headline-input[_ngcontent-%COMP%], \n   .editorial-textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .feed-filter-tabs[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: auto;\n  }\n  .feed-tab[_ngcontent-%COMP%] {\n    flex: 1;\n    white-space: nowrap;\n    padding: 8px 10px;\n  }\n  .comment-card[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .comment-card-top[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .author-avatar[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n    font-size: 1.15rem;\n  }\n}\n@media (max-width: 420px) {\n  .quick-specs-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.guest-cta[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 10px;\n  border-color: rgba(245, 197, 24, 0.3);\n}\n.guest-cta[_ngcontent-%COMP%]   .cta-emoji[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.guest-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n}\n.guest-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.84rem;\n  color: #94a3b8;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=movie-detail.page.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MovieDetailPage, { className: "MovieDetailPage", filePath: "src\\app\\pages\\movie-detail\\movie-detail.page.ts", lineNumber: 1432 });
})();
export {
  MovieDetailPage
};
//# sourceMappingURL=chunk-MKBWMDPO.js.map
