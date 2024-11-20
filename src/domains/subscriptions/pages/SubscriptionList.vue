<template>
  <div class="subscription-list">
    <h2>{{ $t('message.subscriptions') }}</h2>
    <subscription-item v-for="subscription in subscriptions" :key="subscription.id" :subscription="subscription" />
  </div>
</template>

<script>
import SubscriptionItem from '../components/SubscriptionItem.vue';
import subscriptionService from '../services/subscriptionService';
import Subscription from '../model/Subscription';

export default {
  name: 'SubscriptionList',
  components: {
    SubscriptionItem
  },
  data() {
    return {
      subscriptions: []
    };
  },
  created() {
    this.generateSampleSubscriptions();
  },
  methods: {
    generateSampleSubscriptions() {
      this.subscriptions = [
        new Subscription(1, 'Basic Plan', 'Enjoy our basic plan with essential features.', 19.99, 'https://via.placeholder.com/300'),
        new Subscription(2, 'Premium Plan', 'Get the most out of our premium plan with advanced features.', 49.99, 'https://via.placeholder.com/300'),
        new Subscription(3, 'Student Plan', 'Special discount for students with basic features.', 9.99, 'https://via.placeholder.com/300'),
        new Subscription(4, 'Business Plan', 'Tailored for businesses with premium features.', 99.99, 'https://via.placeholder.com/300')
      ];
    }
  }
};
</script>

<style scoped>
.subscription-list {
  padding: 20px;
}
</style>