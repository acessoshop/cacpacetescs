import { a7 as useRouter, V as reactExports, I as isRedirect, T as TSS_SERVER_FUNCTION, y as getServerFnById, j as createServerFn } from "./server-D8pWyu0D.js";
import { o as objectType, s as stringType, c as arrayType, l as literalType, n as numberType } from "./paradise.server-DUvybL1E.js";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const ItemSchema = objectType({
  id: stringType(),
  name: stringType().min(1).max(200),
  variant: stringType().max(120).optional(),
  size: stringType().max(40).optional(),
  price: numberType().int().min(1).max(1e6),
  qty: numberType().int().min(1).max(20),
  image: stringType().max(500).optional()
});
const CreateOrderSchema = objectType({
  customer: objectType({
    name: stringType().max(120).optional().or(literalType("")),
    phone: stringType().max(20).optional().or(literalType("")),
    email: stringType().max(120).optional().or(literalType("")),
    cep: stringType().max(9).optional().or(literalType("")),
    address: stringType().max(200).optional().or(literalType("")),
    number: stringType().max(20).optional().or(literalType("")),
    complement: stringType().max(120).optional().or(literalType("")),
    neighborhood: stringType().max(120).optional().or(literalType("")),
    city: stringType().max(120).optional().or(literalType("")),
    state: stringType().max(2).optional().or(literalType(""))
  }).partial().optional().default({}),
  items: arrayType(ItemSchema).min(1).max(20)
});
const createPixOrder = createServerFn({
  method: "POST"
}).inputValidator((input) => CreateOrderSchema.parse(input)).handler(createSsrRpc("51e33b1469a4253dbb05cfa629837739dd29dca15ec4f1cfb6f92b418184aa0f"));
const getOrderStatus = createServerFn({
  method: "POST"
}).inputValidator((input) => objectType({
  transactionId: stringType().min(1).max(120)
}).parse(input)).handler(createSsrRpc("ab7ac558f2d5018cf7be54349328581afb4016bbc0e0894e7b5b0af83494b52a"));
export {
  createPixOrder as c,
  getOrderStatus as g,
  useServerFn as u
};
