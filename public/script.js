console.log("hi");
import "https://cdn.jsdelivr.net/npm/gun/gun.js"
import { createApp, reactive } from "https://unpkg.com/petite-vue?module";

const gun = GUN(["https://etogun.glitch.me/gun"]);

const store = reactive({
  pulse: Date.now(),
  pointer: [0,0],
  listen() {
    self = this;
    gun
      .get("etovoteto")
      .get("relay")
      .get("pulse")
      .on(d => (self.pulse = d));
  },
  getPointer() {
    
  }
});

store.listen();

createApp({ store }).mount();
