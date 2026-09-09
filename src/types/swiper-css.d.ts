// Swiper ships its stylesheets through the package's "exports" map
// (e.g. "swiper/css" -> "swiper/swiper.css"). The specifier has no file
// extension, so TypeScript resolves it to a .css file and reports TS2882
// ("Cannot find module or type declarations for side-effect import").
// These ambient declarations give the side-effect imports a type.
declare module "swiper/css";
declare module "swiper/css/*";
