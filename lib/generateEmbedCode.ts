import { ModalCustomizationValues } from "../contexts/templateDefaults";
import { TEMPLATE_FEATURES } from "../contexts/templateFeatures";

export interface EmbedConfig extends ModalCustomizationValues {
  templateId: number;
}

function e(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const CLOSE_SVG_BLACK = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" d="M18 3C15.03 3 12.13 3.88 9.67 5.53C7.2 7.18 5.28 9.52 4.14 12.26C3.01 15 2.71 18.02 3.29 20.93C3.87 23.84 5.3 26.51 7.39 28.61C9.49 30.7 12.16 32.13 15.07 32.71C17.98 33.29 21 32.99 23.74 31.86C26.48 30.72 28.82 28.8 30.47 26.33C32.12 23.87 33 20.97 33 18C33 16.03 32.62 14.08 31.86 12.26C31.11 10.44 30 8.78 28.61 7.39C27.22 6 25.56 4.89 23.74 4.14C21.92 3.38 19.97 3 18 3ZM18 30C15.63 30 13.31 29.3 11.33 27.98C9.36 26.66 7.82 24.78 6.91 22.59C6.01 20.4 5.77 17.99 6.23 15.66C6.69 13.33 7.84 11.19 9.51 9.51C11.19 7.84 13.33 6.69 15.66 6.23C17.99 5.77 20.4 6.01 22.59 6.91C24.78 7.82 26.66 9.36 27.98 11.33C29.3 13.31 30 15.63 30 18C30 21.18 28.73 24.23 26.48 26.48C24.23 28.73 21.18 30 18 30ZM23.39 10.5L18 15.89L12.62 10.5L10.5 12.62L15.89 18L10.5 23.39L12.62 25.5L18 20.12L23.39 25.5L25.5 23.39L20.12 18L25.5 12.62L23.39 10.5Z" fill="FILL_COLOR"/></svg>`;

const CLOSE_IMG_BLACK = `<img src="data:image/svg+xml,${encodeURIComponent('<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 9L9 27M9 9l18 18" stroke="%23000" stroke-width="2" stroke-linecap="round"/></svg>')}" style="width:36px;height:36px;cursor:pointer;" />`;

const POSITION_MAP: Record<string, { justify: string; align: string }> = {
  "top-left":      { justify: "flex-start", align: "flex-start" },
  "top-center":    { justify: "flex-start", align: "center" },
  "top-right":     { justify: "flex-start", align: "flex-end" },
  "center-left":   { justify: "center",     align: "flex-start" },
  "center":        { justify: "center",     align: "center" },
  "center-right":  { justify: "center",     align: "flex-end" },
  "bottom-left":   { justify: "flex-end",   align: "flex-start" },
  "bottom-center": { justify: "flex-end",   align: "center" },
  "bottom-right":  { justify: "flex-end",   align: "flex-end" },
};

const SIZE_SCALE: Record<string, number> = { sm: 0.75, md: 0.85, lg: 0.95 };

const S = {
  font: "font-family:'Inter',sans-serif;",
  bold: "font-weight:700;",
  medium: "font-weight:500;",
  normal: "font-weight:400;",
  t4xl: "font-size:2.25rem;line-height:2.5rem;",
  t3xl: "font-size:1.875rem;line-height:2.25rem;",
  t2xl: "font-size:1.5rem;line-height:1.75rem;",
  txl: "font-size:1.25rem;line-height:1.75rem;",
  tlg: "font-size:1.125rem;line-height:1.75rem;",
  tbase: "font-size:1rem;line-height:1.5rem;",
  tsm: "font-size:0.875rem;line-height:1.25rem;",
  roundedLg: "border-radius:0.5rem;",
  roundedXl: "border-radius:0.75rem;",
  shadowXl: "box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);",
  shadow2xl: "box-shadow:0 25px 50px -12px rgba(0,0,0,.25);",
};

function closeBtn(fillColor: string): string {
  return `<div class="getpopup-close" style="position:absolute;top:20px;right:20px;cursor:pointer;">${CLOSE_SVG_BLACK.replace("FILL_COLOR", e(fillColor))}</div>`;
}

function inputHtml(cfg: EmbedConfig, placeholder: string): string {
  return `<input type="text" placeholder="${e(placeholder)}" style="width:100%;border:1px solid ${e(cfg.borderColor)};${S.font}${S.normal}${S.tbase}${S.roundedLg}padding:15px;margin-bottom:24px;color:${e(cfg.placeholderColor)};box-sizing:border-box;outline:none;background:transparent;" />`;
}

function btnPrimary(cfg: EmbedConfig, text: string): string {
  return `<button class="getpopup-btn" style="${S.font}${S.medium}${S.tbase}${S.roundedLg}padding:14px 0;color:#fff;background-color:${e(cfg.buttonColor)};border:none;cursor:pointer;width:100%;">${e(text)}</button>`;
}

function btnSecondary(cfg: EmbedConfig, text: string): string {
  return `<button class="getpopup-btn" style="${S.font}${S.medium}${S.tbase}${S.roundedLg}padding:14px 0;color:${e(cfg.textColor)};background-color:${e(cfg.backgroundColor)};border:1px solid ${e(cfg.borderColor)};cursor:pointer;width:100%;">${e(text)}</button>`;
}

function title(cfg: EmbedConfig, size: string = S.t3xl): string {
  return `<h2 style="${S.font}${S.bold}${size}margin:0 0 16px 0;color:${e(cfg.textColor)};">${e(cfg.title)}</h2>`;
}

function subtitle(cfg: EmbedConfig, size: string = S.txl, mb: string = "32px"): string {
  return `<h4 style="${S.font}${S.normal}${size}margin:0 0 ${mb} 0;color:${e(cfg.textColor)};">${e(cfg.subtitle)}</h4>`;
}

// ─── Template HTML Builders ───────────────────────────

function buildTemplate1(cfg: EmbedConfig): string {
  return `<div style="display:flex;flex-direction:column;align-items:center;padding:32px 64px;position:relative;width:480px;background:${e(cfg.backgroundColor)};${S.shadow2xl}box-sizing:border-box;">
    <div style="display:inline-flex;justify-content:center;align-items:center;width:90px;height:90px;margin-bottom:24px;border-radius:50%;background:${e(cfg.buttonColor)};">
      <img src="${e(cfg.logo)}" style="width:48px;height:48px;" />
    </div>
    ${title(cfg)}
    ${subtitle(cfg)}
    ${inputHtml(cfg, cfg.inputPlaceholder1)}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;width:100%;">
      ${btnSecondary(cfg, cfg.button1)}
      ${btnPrimary(cfg, cfg.button2)}
    </div>
    ${closeBtn(cfg.textColor)}
  </div>`;
}

function buildTemplate2(cfg: EmbedConfig): string {
  const img = cfg.image || "/assets/modal2_cover.png";
  return `<div style="display:flex;flex-direction:column;align-items:center;position:relative;border:1px solid ${e(cfg.borderColor)};${S.shadowXl}${S.roundedXl}width:480px;overflow:hidden;background:${e(cfg.backgroundColor)};box-sizing:border-box;">
    <div style="height:240px;width:100%;overflow:hidden;">
      <img src="${e(img)}" style="width:100%;height:100%;object-fit:cover;" />
    </div>
    <div style="padding:0 64px 32px;width:100%;text-align:center;box-sizing:border-box;">
      <h2 style="${S.font}${S.bold}${S.t3xl}margin:32px 0 16px 0;color:${e(cfg.textColor)};">${e(cfg.title)}</h2>
      ${subtitle(cfg, S.txl, "24px")}
      <div style="display:grid;grid-template-rows:1fr 1fr;gap:16px;width:100%;">
        ${btnPrimary(cfg, cfg.button2)}
        ${btnSecondary(cfg, cfg.button1)}
      </div>
    </div>
    ${closeBtn(cfg.textColor)}
  </div>`;
}

function buildTemplate3(cfg: EmbedConfig): string {
  return `<div style="display:flex;flex-direction:column;align-items:center;position:relative;border:1px solid ${e(cfg.borderColor)};${S.shadowXl}${S.roundedXl}width:480px;padding:32px 0;background:${e(cfg.backgroundColor)};box-sizing:border-box;">
    <h5 style="${S.font}${S.medium}${S.tlg}margin:0 0 12px 0;color:${e(cfg.buttonColor)};">${e(cfg.bodyText)}</h5>
    ${title(cfg)}
    <h4 style="${S.font}${S.normal}${S.txl}margin:0 0 40px 0;color:${e(cfg.textColor)};">${e(cfg.subtitle)}</h4>
    <div style="display:flex;flex-direction:column;margin-bottom:32px;width:100%;padding:0 64px;box-sizing:border-box;">
      <div style="display:flex;align-items:center;margin-bottom:8px;">
        <input type="radio" name="getpopup-plan" style="width:24px;height:24px;accent-color:${e(cfg.buttonColor)};" />
        <label style="${S.font}${S.medium}${S.tlg}margin-left:8px;color:${e(cfg.textColor)};">Starter</label>
      </div>
      <p style="${S.font}${S.normal}${S.tsm}color:#717791;margin:0 0 24px 36px;">1 free (then $15 per member / month)</p>
      <div style="display:flex;align-items:center;margin-bottom:8px;">
        <input type="radio" name="getpopup-plan" style="width:24px;height:24px;accent-color:${e(cfg.buttonColor)};" />
        <label style="${S.font}${S.medium}${S.tlg}margin-left:8px;color:${e(cfg.textColor)};">Pro</label>
      </div>
      <p style="${S.font}${S.normal}${S.tsm}color:#717791;margin:0 0 24px 36px;">$19 per member/month</p>
      <div style="display:flex;align-items:center;margin-bottom:8px;">
        <input type="radio" name="getpopup-plan" style="width:24px;height:24px;accent-color:${e(cfg.buttonColor)};" />
        <label style="${S.font}${S.medium}${S.tlg}margin-left:8px;color:${e(cfg.textColor)};">Business</label>
      </div>
      <p style="${S.font}${S.normal}${S.tsm}color:#717791;margin:0 0 0 36px;">$29 per member/month</p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;width:100%;padding:0 64px;box-sizing:border-box;">
      ${btnSecondary(cfg, cfg.button1)}
      ${btnPrimary(cfg, cfg.button2)}
    </div>
    ${closeBtn(cfg.textColor)}
  </div>`;
}

function buildTemplate4(cfg: EmbedConfig): string {
  return `<div style="display:flex;flex-direction:column;align-items:center;padding:32px 64px;position:relative;text-align:center;border:1px solid ${e(cfg.borderColor)};${S.shadowXl}${S.roundedXl}width:480px;background:${e(cfg.backgroundColor)};box-sizing:border-box;">
    <div style="display:inline-flex;justify-content:center;align-items:center;width:90px;height:90px;margin-bottom:24px;border-radius:50%;background:${e(cfg.buttonColor)};">
      <img src="${e(cfg.logo)}" style="width:48px;height:48px;" />
    </div>
    ${title(cfg)}
    ${subtitle(cfg, S.txl, "24px")}
    <p style="${S.font}${S.normal}${S.tsm}color:#777;margin:0 0 28px 0;">${e(cfg.bodyText)}</p>
    <div style="display:grid;grid-template-rows:1fr 1fr;gap:16px;width:100%;">
      ${btnPrimary(cfg, cfg.button2)}
      ${btnSecondary(cfg, cfg.button1)}
    </div>
    ${closeBtn(cfg.textColor)}
  </div>`;
}

function buildTemplate5(cfg: EmbedConfig): string {
  return `<div style="display:flex;flex-direction:column;align-items:flex-end;padding:32px 64px;position:relative;text-align:center;border:1px solid ${e(cfg.borderColor)};${S.shadowXl}${S.roundedXl}width:480px;background:${e(cfg.backgroundColor)};box-sizing:border-box;">
    ${title(cfg)}
    ${subtitle(cfg, S.txl, "24px")}
    <div style="display:grid;grid-template-rows:1fr;width:100%;">
      ${btnPrimary(cfg, cfg.button2)}
    </div>
    ${closeBtn(cfg.textColor)}
  </div>`;
}

function buildTemplate6(cfg: EmbedConfig): string {
  return `<div style="display:flex;flex-direction:column;align-items:flex-end;padding:32px 64px;position:relative;text-align:center;border:1px solid ${e(cfg.borderColor)};${S.shadowXl}${S.roundedXl}width:480px;background:${e(cfg.backgroundColor)};box-sizing:border-box;">
    <div style="display:inline-flex;justify-content:center;width:100%;">
      <img src="${e(cfg.logo)}" style="width:90px;height:90px;margin-bottom:24px;" />
    </div>
    ${title(cfg)}
    ${subtitle(cfg)}
    ${inputHtml(cfg, cfg.inputPlaceholder1)}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;width:100%;">
      ${btnSecondary(cfg, cfg.button1)}
      ${btnPrimary(cfg, cfg.button2)}
    </div>
    ${closeBtn(cfg.textColor)}
  </div>`;
}

function buildTemplate7(cfg: EmbedConfig): string {
  const btnTextColor = cfg.textColor === "#FFFFFF" ? "#000000" : "#FFFFFF";
  return `<div style="display:flex;flex-direction:column;padding:32px 64px;align-items:center;text-align:center;position:relative;border:1px solid ${e(cfg.borderColor)};${S.shadowXl}${S.roundedXl}width:480px;background:${e(cfg.backgroundColor)};box-sizing:border-box;">
    ${title(cfg)}
    <h4 style="${S.font}${S.normal}${S.txl}line-height:1.5rem;margin:0 0 44px 0;color:${e(cfg.textColor)};">${e(cfg.subtitle)}</h4>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;width:100%;">
      ${btnSecondary(cfg, cfg.button1)}
      <button class="getpopup-btn" style="${S.font}${S.medium}${S.tbase}${S.roundedLg}padding:14px 0;color:${btnTextColor};background-color:${e(cfg.buttonColor)};border:none;cursor:pointer;width:100%;">${e(cfg.button2)}</button>
    </div>
    ${closeBtn(cfg.textColor)}
  </div>`;
}

function buildTemplate8(cfg: EmbedConfig): string {
  const btnTextColor = cfg.textColor === "#FFFFFF" ? "#000000" : "#FFFFFF";
  return `<div style="display:flex;flex-direction:column;align-items:center;padding:40px 0;position:relative;text-align:center;border:1px solid ${e(cfg.borderColor)};${S.shadowXl}${S.roundedXl}width:740px;background:${e(cfg.backgroundColor)};box-sizing:border-box;">
    <h2 style="${S.font}${S.bold}${S.t4xl}margin:0 0 16px 0;color:${e(cfg.textColor)};">${e(cfg.title)}</h2>
    <h4 style="${S.font}${S.normal}${S.t2xl}line-height:1.75rem;margin:0 0 40px 0;color:${e(cfg.textColor)};">${e(cfg.subtitle)}</h4>
    <div style="padding:0 128px;width:100%;box-sizing:border-box;">
      <input type="text" placeholder="${e(cfg.inputPlaceholder1)}" style="width:100%;border:1px solid ${e(cfg.borderColor)};${S.font}${S.normal}${S.tbase}${S.roundedLg}padding:14px 23px;margin-bottom:16px;color:${e(cfg.placeholderColor)};background:${e(cfg.backgroundColor)};box-sizing:border-box;outline:none;" />
      ${cfg.privacyText ? `<div style="display:inline-flex;align-items:center;margin-bottom:17px;width:100%;justify-content:center;">
        <input type="radio" name="getpopup-privacy" style="width:24px;height:24px;background:${e(cfg.backgroundColor)};" />
        <label style="${S.font}${S.normal}${S.tsm}margin-left:8px;color:${e(cfg.textColor)};">${e(cfg.privacyText)}</label>
      </div>` : ""}
      <div style="display:grid;grid-template-columns:1fr;width:100%;">
        <button class="getpopup-btn" style="${S.font}${S.medium}${S.tbase}${S.roundedLg}padding:14px 0;color:${btnTextColor};background-color:${e(cfg.buttonColor)};border:none;cursor:pointer;width:100%;">${e(cfg.button2)}</button>
      </div>
    </div>
    ${closeBtn(cfg.textColor)}
  </div>`;
}

function buildTemplate9(cfg: EmbedConfig): string {
  const img = cfg.image || "/assets/modal8_cover.png";
  return `<div style="display:flex;flex-direction:column;position:relative;border:1px solid ${e(cfg.borderColor)};${S.shadowXl}${S.roundedXl}width:480px;overflow:hidden;background:${e(cfg.backgroundColor)};box-sizing:border-box;">
    <div style="height:240px;width:100%;overflow:hidden;">
      <img src="${e(img)}" style="width:100%;height:100%;object-fit:cover;" />
    </div>
    <div style="display:flex;flex-direction:column;padding:16px 64px 32px;align-items:center;box-sizing:border-box;">
      ${title(cfg)}
      ${subtitle(cfg)}
      <input type="text" placeholder="${e(cfg.inputPlaceholder1)}" style="width:100%;border:1px solid ${e(cfg.borderColor)};${S.font}${S.normal}${S.tbase}${S.roundedLg}padding:15px;margin-bottom:12px;color:${e(cfg.placeholderColor)};box-sizing:border-box;outline:none;background:transparent;" />
      <input type="text" placeholder="${e(cfg.inputPlaceholder2)}" style="width:100%;border:1px solid ${e(cfg.borderColor)};${S.font}${S.normal}${S.tbase}${S.roundedLg}padding:15px;margin-bottom:24px;color:${e(cfg.placeholderColor)};box-sizing:border-box;outline:none;background:transparent;" />
      <div style="display:grid;grid-template-columns:1fr;width:100%;margin-bottom:16px;">
        ${btnPrimary(cfg, cfg.button2)}
      </div>
      <div style="display:inline-flex;justify-content:flex-start;width:100%;">
        <p style="${S.font}${S.normal}${S.tsm}color:${e(cfg.textColor)};margin:0;">Already <a href="#" style="text-decoration:underline;color:inherit;">${e(cfg.linkText2)}</a></p>
      </div>
    </div>
    ${closeBtn(cfg.textColor)}
  </div>`;
}

function buildTemplate10(cfg: EmbedConfig): string {
  const img = cfg.image || "/assets/modal9_cover.png";
  return `<div style="display:flex;flex-direction:row;align-items:center;position:relative;overflow:hidden;border:1px solid ${e(cfg.borderColor)};${S.shadowXl}${S.roundedXl}width:740px;background:${e(cfg.backgroundColor)};box-sizing:border-box;">
    <div style="padding:32px 40px;text-align:left;width:51%;box-sizing:border-box;">
      ${title(cfg)}
      ${subtitle(cfg, S.txl, "24px")}
      <input type="text" placeholder="${e(cfg.inputPlaceholder1)}" style="width:100%;border:1px solid ${e(cfg.borderColor)};${S.font}${S.normal}${S.tbase}${S.roundedLg}padding:15px;margin-bottom:12px;color:${e(cfg.placeholderColor)};box-sizing:border-box;outline:none;background:transparent;" />
      <input type="text" placeholder="${e(cfg.inputPlaceholder2)}" style="width:100%;border:1px solid ${e(cfg.borderColor)};${S.font}${S.normal}${S.tbase}${S.roundedLg}padding:15px;margin-bottom:24px;color:${e(cfg.placeholderColor)};box-sizing:border-box;outline:none;background:transparent;" />
      <div style="display:grid;grid-template-columns:1fr;width:100%;margin-bottom:16px;">
        ${btnPrimary(cfg, cfg.button2)}
      </div>
      <div style="display:inline-flex;justify-content:space-between;width:100%;">
        <a href="#" style="${S.font}${S.normal}${S.tsm}color:${e(cfg.textColor)};text-decoration:none;">${e(cfg.linkText1)}</a>
        <a href="#" style="${S.font}${S.normal}${S.tsm}color:${e(cfg.textColor)};text-decoration:none;">${e(cfg.linkText2)}</a>
      </div>
    </div>
    <div style="width:49%;"><img src="${e(img)}" style="width:100%;height:100%;object-fit:cover;" /></div>
    ${closeBtn(cfg.textColor)}
  </div>`;
}

function buildTemplate11(cfg: EmbedConfig): string {
  const img = cfg.image || "/assets/modal11_cover.png";
  return `<div style="display:flex;flex-direction:row;position:relative;${S.roundedXl}width:740px;box-sizing:border-box;">
    <div style="display:flex;${S.roundedXl}overflow:hidden;${S.shadowXl}width:74%;"><img src="${e(img)}" style="width:100%;object-fit:cover;" /></div>
    <div style="padding:32px 40px;text-align:left;position:absolute;z-index:10;${S.roundedXl}${S.shadowXl}width:51%;top:60px;left:49%;background:${e(cfg.backgroundColor)};box-sizing:border-box;">
      ${title(cfg)}
      ${subtitle(cfg, S.txl, "24px")}
      <input type="text" placeholder="${e(cfg.inputPlaceholder1)}" style="width:100%;border:1px solid ${e(cfg.borderColor)};${S.font}${S.normal}${S.tbase}${S.roundedLg}padding:15px;margin-bottom:12px;color:${e(cfg.placeholderColor)};box-sizing:border-box;outline:none;background:transparent;" />
      <input type="text" placeholder="${e(cfg.inputPlaceholder2)}" style="width:100%;border:1px solid ${e(cfg.borderColor)};${S.font}${S.normal}${S.tbase}${S.roundedLg}padding:15px;margin-bottom:24px;color:${e(cfg.placeholderColor)};box-sizing:border-box;outline:none;background:transparent;" />
      <div style="display:grid;grid-template-columns:1fr;width:100%;margin-bottom:16px;">
        ${btnPrimary(cfg, cfg.button2)}
      </div>
      <div style="display:inline-flex;justify-content:space-between;width:100%;">
        <a href="#" style="${S.font}${S.normal}${S.tsm}color:${e(cfg.textColor)};text-decoration:none;">${e(cfg.linkText1)}</a>
        <a href="#" style="${S.font}${S.normal}${S.tsm}color:${e(cfg.textColor)};text-decoration:none;">${e(cfg.linkText2)}</a>
      </div>
      ${closeBtn(cfg.textColor)}
    </div>
  </div>`;
}

function buildTemplate12(cfg: EmbedConfig): string {
  const envelopeSvg = `<svg width="120" height="130" viewBox="0 0 160 173" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M80 160C124.183 160 160 124.183 160 80C160 35.8172 124.183 0 80 0C35.8172 0 0 35.8172 0 80C0 124.183 35.8172 160 80 160Z" fill="#D8F9FF"/><path d="M113.755 54.6269C101.871 54.6269 92.1484 61.6879 92.1484 70.3169V116.776H135.362V70.0119C135.361 61.5499 125.638 54.6269 113.755 54.6269Z" fill="#0392AA"/><path d="M109.239 51.3849H51.2216C36.8536 51.3849 25.0977 58.8139 25.0977 67.8929V116.775H92.1487V70.3159C92.1487 61.6869 101.872 54.6259 113.756 54.6259C125.64 54.6259 135.362 61.5489 135.362 70.0109V67.5719C135.363 58.6689 123.607 51.3849 109.239 51.3849Z" fill="${e(cfg.buttonColor)}"/><path d="M83.1157 116.775H73.0156V172.549H87.4396V116.775H83.1157Z" fill="#FFC300"/><path d="M85.8509 27.2029H71.2549V36.6409H85.8509V27.2029Z" fill="${e(cfg.buttonColor)}"/><path d="M87.5 73.95C87.5 75.98 85.86 77.63 83.6 77.78C81.34 77.92 79.7 76.03 79.7 73.95C79.7 71.87 81.16 70.05 83.6 70.05C86.04 70.05 87.5 71.92 87.5 73.95Z" fill="#E0E1E3"/><path d="M81.34 70.76C82 70.3 82.79 70.05 83.6 70.05C84.4 70.05 85.19 70.3 85.85 70.76V36.64H81.34V70.76Z" fill="#FFC300"/><path d="M92.15 71.13V111.31H150.59V71.13H92.15Z" fill="#FFB358"/><path d="M92.15 71.13V74.64L119.02 94.71L150.59 71.13H92.15Z" fill="#FFD494"/><path d="M119.02 94.71L113.37 90.49L92.15 107.53V111.31H150.59L124.66 90.49L119.02 94.71Z" fill="#ED8F33"/></svg>`;
  return `<div style="display:flex;flex-direction:column;align-items:center;padding:32px 64px;position:relative;text-align:center;border:1px solid ${e(cfg.borderColor)};${S.shadowXl}${S.roundedXl}width:480px;background:${e(cfg.backgroundColor)};box-sizing:border-box;">
    <div style="margin-bottom:12px;">${envelopeSvg}</div>
    ${title(cfg)}
    <h4 style="${S.font}${S.normal}${S.txl}margin:0 0 36px 0;color:${e(cfg.textColor)};">${e(cfg.subtitle)}</h4>
    <input type="text" placeholder="${e(cfg.inputPlaceholder1)}" style="width:100%;border:1px solid ${e(cfg.borderColor)};${S.font}${S.normal}${S.tbase}${S.roundedLg}padding:15px;margin-bottom:12px;color:${e(cfg.placeholderColor)};box-sizing:border-box;outline:none;background:transparent;" />
    <div style="display:grid;grid-template-columns:1fr;width:100%;margin-bottom:16px;">
      ${btnPrimary(cfg, cfg.button2)}
    </div>
    <div style="display:inline-flex;justify-content:flex-start;width:100%;">
      <p style="${S.font}${S.normal}${S.tsm}color:${e(cfg.textColor)};margin:0;">Already <a href="#" style="text-decoration:underline;color:inherit;">${e(cfg.linkText2)}</a></p>
    </div>
    ${closeBtn(cfg.textColor)}
  </div>`;
}

function buildTemplate13(cfg: EmbedConfig): string {
  const faceSvg = `<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M85.22 73.71C84.96 73.48 84.67 73.31 84.34 73.19C84.02 73.08 83.68 73.03 83.34 73.05C82.99 73.07 82.66 73.15 82.35 73.3C82.04 73.45 81.76 73.66 81.53 73.91C78.81 76.92 75.49 79.33 71.78 80.98C68.07 82.63 64.06 83.48 60 83.48C55.94 83.48 51.93 82.63 48.22 80.98C44.51 79.33 41.19 76.92 38.46 73.91C37.74 73.12 36.66 72.78 35.64 73.01C34.62 73.25 33.81 74.01 33.53 75C33.24 76 33.53 77.07 34.28 77.79C37.49 81.35 41.41 84.19 45.79 86.14C50.17 88.09 54.91 89.1 60 89.1C65.09 89.1 69.83 88.09 74.21 86.14C78.59 84.19 82.51 81.35 85.72 77.79C86.18 77.28 86.42 76.6 86.38 75.91C86.35 75.22 86.04 74.57 85.52 74.11" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M60 114.78C27.07 114.78 0 87.71 0 54.78C0 21.85 27.07-5.22 60-5.22C92.93-5.22 120 21.85 120 54.78C120 87.71 92.93 114.78 60 114.78ZM60 0C26.86 0 0 26.86 0 60C0 93.14 26.86 120 60 120C93.14 120 120 93.14 120 60C120 26.86 93.14 0 60 0Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M80.87 41.74C74.07 41.74 68.52 47.3 67.82 54.78C67.82 56.66 69.35 57.39 70.43 57.39C71.51 57.39 73.04 56.66 73.04 54.78C73.04 50.51 76.65 46.96 80.87 46.96C85.08 46.96 88.69 50.51 88.69 54.78C88.69 56.66 90.22 57.39 91.3 57.39C92.38 57.39 93.91 56.66 93.91 54.78C93.91 47.3 87.67 41.74 80.87 41.74" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M46.96 54.78C46.96 56.66 48.49 57.34 49.57 57.34C50.64 57.34 52.17 56.66 52.17 54.78C52.17 50.51 48.56 46.96 44.35 46.96C40.13 46.96 36.52 50.51 36.52 54.78C36.52 47.3 30.28 41.85 23.49 41.85C16.69 41.85 26.09 56.66 28.7 57.34C29.77 57.34 31.3 56.66 31.3 54.78C31.3 50.51 34.92 46.96 39.13 46.96C43.34 46.96 46.96 50.51 46.96 54.78Z" fill="white"/></svg>`;
  return `<div style="display:flex;flex-direction:column;width:480px;height:466px;background:${e(cfg.backgroundColor)};justify-content:center;align-items:center;text-align:center;position:relative;border:1px solid ${e(cfg.borderColor)};${S.shadowXl}${S.roundedXl}box-sizing:border-box;">
    <div style="margin-bottom:32px;">${faceSvg}</div>
    <h2 style="${S.font}${S.bold}${S.t3xl}margin:0 0 16px 0;color:${e(cfg.textColor)};">${e(cfg.title)}</h2>
    <h4 style="${S.font}${S.normal}${S.txl}line-height:1.5rem;margin:0 0 44px 0;padding:0 64px;color:${e(cfg.textColor)};">${e(cfg.subtitle)}</h4>
    <div style="display:grid;grid-template-columns:1fr;width:100%;position:absolute;bottom:0;">
      <button class="getpopup-btn" style="${S.font}${S.medium}font-size:1.25rem;padding:14px 0;color:${e(cfg.textColor)};background:rgba(0,0,0,0.1);border:none;cursor:pointer;width:100%;${S.roundedLg}">${e(cfg.button2)}</button>
    </div>
    ${closeBtn(cfg.textColor)}
  </div>`;
}

const TEMPLATE_BUILDERS: Record<number, (cfg: EmbedConfig) => string> = {
  1: buildTemplate1, 2: buildTemplate2, 3: buildTemplate3,
  4: buildTemplate4, 5: buildTemplate5, 6: buildTemplate6,
  7: buildTemplate7, 8: buildTemplate8, 9: buildTemplate9,
  10: buildTemplate10, 11: buildTemplate11, 12: buildTemplate12,
  13: buildTemplate13,
};

export function generateEmbedCode(config: EmbedConfig): string {
  const pos = POSITION_MAP[config.position] || POSITION_MAP["center"];
  const scale = SIZE_SCALE[config.size] || SIZE_SCALE["md"];

  const builder = TEMPLATE_BUILDERS[config.templateId] || TEMPLATE_BUILDERS[1];
  const modalHtml = builder(config);

  const cfgJson = JSON.stringify({
    templateId: config.templateId,
    visitorDevice: config.visitorDevice,
    xSecondsActive: config.xSecondsActive,
    xSeconds: config.xSeconds,
    xScrollActive: config.xScrollActive,
    xScroll: config.xScroll,
    trafficSourceActive: config.trafficSourceActive,
    trafficSource: config.trafficSource,
    browserLanguageActive: config.browserLanguageActive,
    browserLanguage: config.browserLanguage,
    exitIntent: config.exitIntent,
    webhookUrl: config.webhookUrl,
    sendFormSubmission: config.sendFormSubmission,
    sendClickData: config.sendClickData,
  });

  return `<script>
(function(){
  var cfg=${cfgJson};
  var SK="getpopup-d-"+cfg.templateId;
  if(localStorage.getItem(SK))return;
  function isMob(){return /Mobi|Android/i.test(navigator.userAgent)}
  if(cfg.visitorDevice.isActive){var m=isMob();if(m&&!cfg.visitorDevice.mobile)return;if(!m&&!cfg.visitorDevice.desktop)return}
  if(cfg.trafficSourceActive&&cfg.trafficSource){if(!document.referrer.includes(cfg.trafficSource))return}
  if(cfg.browserLanguageActive&&cfg.browserLanguage.length>0){var l=(navigator.language||"").split("-")[0].toLowerCase();if(cfg.browserLanguage.indexOf(l)===-1)return}
  var lk=document.createElement("link");lk.rel="stylesheet";lk.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap";document.head.appendChild(lk);
  var ov=document.createElement("div");ov.id="getpopup-overlay";
  ov.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:999999;display:flex;justify-content:${pos.justify};align-items:${pos.align};padding:20px;box-sizing:border-box;";
  var md=document.createElement("div");md.style.cssText="transform:scale(${scale});transform-origin:${pos.justify === "flex-start" ? "top" : pos.justify === "flex-end" ? "bottom" : "center"} ${pos.align === "flex-start" ? "left" : pos.align === "flex-end" ? "right" : "center"};";
  md.innerHTML=${JSON.stringify(modalHtml)};
  ov.appendChild(md);
  function closeModal(){ov.remove();localStorage.setItem(SK,Date.now().toString())}
  function sendWH(type,data){if(!cfg.webhookUrl)return;if(type==="form"&&!cfg.sendFormSubmission)return;if(type==="click"&&!cfg.sendClickData)return;try{fetch(cfg.webhookUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:type,data:data,timestamp:new Date().toISOString()})})}catch(e){}}
  function showModal(){
    document.body.appendChild(ov);
    ov.querySelectorAll(".getpopup-close").forEach(function(el){el.addEventListener("click",closeModal)});
    ov.querySelectorAll(".getpopup-btn").forEach(function(el){el.addEventListener("click",function(){sendWH("click",{text:el.textContent})})});
    ov.addEventListener("click",function(ev){if(ev.target===ov)closeModal()});
    sendWH("click",{text:"impression"});
  }
  var hasTrigger=cfg.xSecondsActive||cfg.xScrollActive||cfg.exitIntent;
  if(!hasTrigger){showModal();return}
  var shown=false;function show(){if(!shown){shown=true;showModal()}}
  if(cfg.xSecondsActive){var s=parseInt(cfg.xSeconds,10)||12;setTimeout(show,s*1000)}
  if(cfg.xScrollActive){var p=parseInt(cfg.xScroll,10)||50;window.addEventListener("scroll",function onS(){var sp=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;if(sp>=p){show();window.removeEventListener("scroll",onS)}})}
  if(cfg.exitIntent){document.addEventListener("mouseout",function onE(ev){if(ev.clientY<=0){show();document.removeEventListener("mouseout",onE)}})}
})();
</script>`;
}
