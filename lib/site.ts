export const site = {
  name: "Soares Climatização",
  instagram: "https://www.instagram.com/soares.climatizacao/",
  whatsapp: "5547997196961",
  whatsappLabel: "(47) 9 9719-6961",
  region: "Bombinhas e região",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
