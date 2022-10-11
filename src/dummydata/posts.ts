export const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/guilhermerera.png",
			name: "Guilherme Ferreira",
			role: "Web Developer @ Fetchly Labs"
		},
		content: [
			{ contentType: "paragraph", contentText: "Fala galeraa 👋" },
			{
				contentType: "paragraph",
				contentText:
					"Só pra contar que to fazendo o Ignite da Rocketseat. Esse é o primeiro	projeto do Bootcamp de ReactJS, usado durante as aulas para fortalecer conceitos base da biblioteca, como componentização, uso de propriedades, css modules, iterações, alguns hooks e também alguns conceitos de programação, como a programação declarativa e	imutabilidade."
			},
			{
				contentType: "paragraph",
				contentText:
					"Sempre bom fortalecer o alicerce antes de construir o segundo andar.;)"
			},
			{
				contentType: "paragraph",
				contentText: "Você vai poder conferir a evolução no meu github."
			},
			{
				contentType: "link",
				contentText: "Clique aqui.",
				url: "https://github.com/guilhermerera"
			}
		],
		publishedAt: new Date("2022-10-5 13:48")
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/diego3g.png",
			name: "Diego Fernandes",
			role: "CTO @Rocketseat"
		},
		content: [
			{ contentType: "paragraph", contentText: "Fala dev!" },
			{
				contentType: "paragraph",
				contentText:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi est libero?"
			},
			{
				contentType: "paragraph",
				contentText:
					"Deleniti esse explicabo vel similique cumque. Deleniti eaque doloribus autem. Ad dolores, amet perferendis nisi odio voluptatum! Inventore?"
			}
		],
		publishedAt: new Date("2022-10-9 19:22")
	}
];
