<template>
  <q-list>
    <q-expansion-item
      expand-separator
      icon="perm_identity"
      label="Account settings"
      caption="John Doe">
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
          commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
export default {
  data() {
    return {
      onlineUsers: [
        {
          id: 1,
          name: 'Uncle Sam',
          photo_url: '',
        }, {
          id: 2,
          name: 'Uncle Sam',
          photo_url: '',
        },
      ],
    };
  },
};
</script>
