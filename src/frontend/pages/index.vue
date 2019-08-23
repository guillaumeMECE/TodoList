<template>
  <b-row>
    <b-col>
      <h1>Welcome to Nuxtorous!</h1>
      <createTodo />
    </b-col>
  </b-row>
</template>

<script>
import CreateTodo from '~/components/CreateTodo';

export default {
    components: {
        CreateTodo
    }
};
</script>
