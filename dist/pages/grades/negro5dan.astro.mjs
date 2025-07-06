import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_JLzxvDgg.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_SnKK2o9M.mjs';
import { $ as $$Header } from '../../chunks/Header_JkLYU8Px.mjs';
import { $ as $$GradeProgram } from '../../chunks/GradeProgram_vxf7dZNX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Negro5Dan = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "name": "Negro 5 Dan", "href": "/program" })} ${renderComponent($$result2, "GradeProgram", $$GradeProgram, { "color": "negro5" })} ` })}`;
}, "C:/Users/Zamch/Desktop/qqq/coding/proyectos/LQH-program/src/pages/grades/negro5Dan.astro", void 0);

const $$file = "C:/Users/Zamch/Desktop/qqq/coding/proyectos/LQH-program/src/pages/grades/negro5Dan.astro";
const $$url = "/grades/negro5Dan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Negro5Dan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
