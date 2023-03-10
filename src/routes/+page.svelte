<script lang="ts">
    import CardList from './CardList.svelte';
    import type { PageData } from './$types';
	export let data: PageData;
  $: ({ test } = data);

  console.log(data);

    const cards = [
      {
        title: 'Card 1',
        imageUrl: 'https://picsum.photos/id/1/300/200',
        description: '카드 깃 배포 테스트 도커 실행 실패시 재시도 테스트'
      },
      {
        title: 'Card 2',
        imageUrl: 'https://picsum.photos/id/2/300/200',
        description: '카드2'
      },
      {
        title: 'Card 3',
        imageUrl: 'https://picsum.photos/id/3/300/200',
        description: 'This is the third card.'
      },
      {
        title: 'Card 4',
        imageUrl: 'https://picsum.photos/id/4/300/200',
        description: 'This is the fourth card.'
      }
    ];
  </script>
  <div></div>
  <CardList cards={cards} />