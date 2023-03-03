<script>
    import CardList from './CardList.svelte';
  
    const cards = [
      {
        title: 'Card 1',
        imageUrl: 'https://picsum.photos/id/1/300/200',
        description: '카드1111'
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
  
  <CardList cards={cards} />