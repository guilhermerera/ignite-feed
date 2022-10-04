export const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/guilhermerera.png",
			name: "Guilherme Ferreira",
			role: "Web Developer @ Fetchly Labs"
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Só pra contar que to fazendo o Ignite da Rocketseat. Esse é o primeiro	projeto do Bootcamp de ReactJS, usado durante as aulas para fortalecer conceitos base da biblioteca, como componentização, uso de propriedades, css modules, iterações, alguns hooks e também alguns conceitos de programação, como a programação declarativa e	imutabilidade."
			},
			{
				type: "paragraph",
				content:
					"Sempre bom fortalecer o alicerce antes de construir o segundo andar.;)"
			},
			{
				type: "paragraph",
				content: "Você vai poder conferir a evolução no meu github."
			},
			{
				type: "link",
				url: "https://github.com/guilhermerera",
				content: "Clique aqui."
			}
		],
		publishedAt: new Date("2022-10-03 13:48")
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/diego3g.png",
			name: "Diego Fernandes",
			role: "CTO @Rocketseat"
		},
		content: [
			{ type: "paragraph", content: "Fala dev!" },
			{
				type: "paragraph",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi est libero?"
			},
			{
				type: "paragraph",
				content:
					"Deleniti esse explicabo vel similique cumque. Deleniti eaque doloribus autem. Ad dolores, amet perferendis nisi odio voluptatum! Inventore?"
			}
		],
		publishedAt: new Date("2022-09-20 19:22")
	}
];
