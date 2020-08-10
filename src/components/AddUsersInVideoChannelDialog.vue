<template>
  <q-dialog v-model="opened">
    <q-card style="min-width: 500px;">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Add Users</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <form @submit.prevent="submit">
          <q-select
            autofocus
            outlined
            use-input
            emit-value
            map-options
            multiple
            use-chips
            v-model="userIds"
            input-debounce="500"
            :options="users"
            @filter="filterFn"
            option-label="name"
            option-value="key"
            hint="Type user name"
            style="padding-bottom: 32px"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>

          <div class="text-right">
            <q-btn
              no-caps
              color="purple"
              class="q-mt-sm"
              label="Add"
              icon="add"
              type="submit"
            />
          </div>
        </form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import FuzzySearch from 'fuzzy-search';

let users = [
  {
    email: 'arjon@gmail.com',
    key: '8dlwbnwzsw20',
    name: 'Arjon',
  },
  {
    email: 'youseff@gmail.com',
    key: 'ryspgtccbf9t',
    name: 'Youssef',
  },
  {
    email: 'ava@gmail.com',
    key: 'ugu6ugzwppxb',
    name: 'Ava',
  },
  {
    email: 'kaushik@gmail.com',
    key: 'x3uq3j14xwy9',
    name: 'Kaushik',
  },
];

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    opened: {
      get() {
        return this.value;
      },
      set(opened) {
        this.$emit('input', opened);
      },
    },
  },
  data() {
    return {
      userIds: [],
      users: [],
    };
  },
  methods: {
    filterFn(val, update, abort) {
      if (val.length < 1) {
        abort();
        return;
      }

      update(() => {
        const searcher = new FuzzySearch(users, ['name', 'email'], {
          caseSensitive: false,
        });
        this.users = searcher.search(val);
      });
    },
    submit() {
      this.$notify.success('Users has been successfully added to the channel!');
      this.opened = false;
      const addUsers = users.filter(u => this.userIds.includes(u.key));
      this.$emit('added', addUsers);
      this.userIds = [];
    },
  },
  async mounted() {
    const { data } = await this.$axios.get('/users');
    users = data.result;
  },
};
</script>

<style>

</style>
