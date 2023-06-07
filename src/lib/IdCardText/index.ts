import DidPlc from "./DidPlc.svelte";
import Nip05 from "./Nip05.svelte";
import OpenpgpFpr from "./OpenpgpFpr.svelte";
import Plain from "./Plain.svelte";

export default {
  Plain,
  Nip05,
  DidPlc,
  OpenpgpFpr,
};

export type IdLink = {
  url: string;
  text: string;
  textStyle?: "nip-05" | "did-plc" | "openpgp-fpr";
};
