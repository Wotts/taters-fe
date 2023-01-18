import router from "@/router";

export const navigate = (page: string) => {
  router.push({ name: page});
}
