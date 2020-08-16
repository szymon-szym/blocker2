<template>
  <div>
    <b-navbar type="dark" variant="primary">
      <b-navbar-brand>Add blocker</b-navbar-brand>
    </b-navbar>
    <b-container>
      <b-row class="mt-2">
        <b-col>
          <p>Please pick the option</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-btn pill size="lg" :variant="stopBtnState" @click="stopAction">
            <b-icon-power></b-icon-power>
          </b-btn>
        </b-col>

        <b-col>
          <b-btn pill size="lg" :variant="moneyBtnState" @click="moneyAction">
            <b-icon-wallet-2></b-icon-wallet-2>
          </b-btn>
        </b-col>
        <b-col>
          <b-btn pill size="lg" :variant="goodBtnState" @click="goodAction">
            <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>
          </b-btn>
        </b-col>
        <b-col>
          <b-btn pill size="lg" :variant="blockBtnState" @click="blockAction">
            <b-icon-exclamation-octagon-fill></b-icon-exclamation-octagon-fill>
          </b-btn>
        </b-col>
      </b-row>
      <!-- <b-tabs> -->
      <!-- <b-tab title="Don't block" @click="sendStopToContent('stop')">Don't block</b-tab>
    <b-tab title="Just block" @click="sendStartToContent('block')">Block for nothing</b-tab>
    <b-tab title="Earn money" @click="sendStartToContent('money')">Block for money</b-tab>
    <b-tab title="Donate for a good purpose" @click="sendStartToContent('good')">Block for good purpose</b-tab>
  </b-tabs> -->
  <b-row class="mt-2">
    <b-col>
      <p> {{ currDescription }}</p>
    </b-col>
  </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      dummy: "txt",
      catblocker: null,
      currOption: null,
      selectedOption: null,
    };
  },
  methods: {
    async stopAction() {
      this.currOption = "stop";
      await this.sendMsgToContent("stop");
    },
    async moneyAction() {
      this.currOption = "money";
      await this.sendMsgToContent("money");
    },
    async goodAction() {
      this.currOption = "good";
      await this.sendMsgToContent("good");
    },
    async blockAction() {
      this.currOption = "block";
      await this.sendMsgToContent("block");
    },
    async sendMsgToContent(text) {
      const tabs = await browser.tabs.query({
        active: true,
        currentWindow: true,
      });
      const currTab = tabs[0].id;
      await browser.tabs.sendMessage(currTab, { message: text });
      // await browser.storage.local.set({ catblocker: true })
      chrome.storage.local.set({ catblocker: text }, () => {
        console.log(`blocker state set in storge to ${text}`);
      });
    },
  },
  async mounted() {
    browser.runtime.sendMessage({});
    // to be moved to store

    // to be moved to the store
    browser.storage.onChanged.addListener((changes, area) => {
      console.log(`area to change: ${area}`);
      if (area === "local") {
        if (Object.prototype.hasOwnProperty.call(changes, "catblocker")) {
          this.catblocker = changes.catblocker.newValue;
          this.currOption = this.catblocker;
        }
      }
    });

    const result = await browser.storage.local.get("catblocker");
    this.catblocker =
      result.catblocker === undefined ? "money" : result.catblocker;
    this.currOption = this.catblocker;
    console.log(`[popup] at init current state is ${this.catblocker}`);
    // });
  },
  computed: {
    stopBtnState() {
      return this.currOption === "stop" ? "danger" : "outline-danger";
    },
    blockBtnState() {
      return this.currOption === "block" ? "primary" : "outline-primary";
    },
    moneyBtnState() {
      return this.currOption === "money" ? "primary" : "outline-primary";
    },
    goodBtnState() {
      return this.currOption === "good" ? "primary" : "outline-primary";
    },
    defaultText() {
      return browser.i18n.getMessage("extName");
    },
    currDescription() {
      if (this.currOption === 'stop') {
        return `Extension is deactivated`
      } else if (this.currOption === 'money') {
        return `Now you are earning money. We will not only block ads on websites, but also replace them with our owns. You are participating in profits!`
      } else if (this.currOption === 'good') {
        return `Sharing is carrying. We will not only block ads on websites, but also replace them with our owns. Part of profits is going to the xxx. Please check "about" tab for details`
      } else if (this.currOption === 'block') {
        return `Now we are simply blocking ads`
      }  else {
        return ``
      }
    }
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
