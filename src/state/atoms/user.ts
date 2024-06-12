import { EmailPasswordSignUpMutation } from "@/graphql/graphl_generated";
import { atom } from "jotai";
import ATOM_KEYS from "../keys";

type MaybeUser =
  | NonNullable<EmailPasswordSignUpMutation["emailPasswordSignup"]>["user"]
  | undefined;

const atomWithLocalStorage = (key: string, initialValue: MaybeUser) => {
  const getInitialValue = () => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(key);
      if (item !== null) {
        return JSON.parse(item);
      }
    }
    return initialValue;
  };
  const baseAtom = atom(getInitialValue());
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === "function" ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(nextValue));
      }
    },
  );
  return derivedAtom;
};

const userStateAtom = atomWithLocalStorage(ATOM_KEYS.USER, undefined);

export default userStateAtom;
