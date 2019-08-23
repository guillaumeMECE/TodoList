
<template>
  <div id="game">
    <h3>Money: {{ money }}</h3>
    <label for="inputBet">Bet:</label>
    <input
      id="inputBet"
      v-model="bet"
      type="number"
    >
    <b-button
      variant="success"
      @click="play"
    >
      Play
    </b-button>
    <p>Result: {{ diceResult }}</p>
    <p
      v-if="playerWins === true"
      class="text-success"
    >
      You win!
    </p>
    <p
      v-if="playerWins === false"
      class="text-danger"
    >
      You loose!
    </p>
    <b-row>
      <b-col>
        <LineChart :chart-data="linechartdata" />
      </b-col>
      <b-col>
        <BarChart :chart-data="barchartdata" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import _ from 'lodash';
import LineChart from '~/components/LineChart';
import BarChart from '~/components/BarChart';

function isValidBet(bet, money) {
    if (bet === 0) {
        alert('You must bet something!'); // eslint-disable-line no-alert
    } else if (Number.isNaN(bet) || bet < 0) {
        alert('You must enter a valid bet!'); // eslint-disable-line no-alert
    } else if (bet > money) {
        alert('You do not have enough money!'); // eslint-disable-line no-alert
    } else {
        return true;
    }
    return false;
}

export default {
    components: {
        LineChart,
        BarChart
    },
    data() {
        return {
            money: 500,
            bet: 0,
            gamesPlayed: 0,
            playerWins: null,
            diceResult: null,
            moneyArray: [],
            linechartdata: null,
            barchartdata: null,
            stats: { wins: 0, loss: 0 }
        };
    },
    created() {
        this.saveStats();
    },
    methods: {
        play() {
            // Retrieve bet
            this.bet = Number.parseInt(this.bet, 10);

            if (isValidBet(this.bet, this.money)) {
                this.gamesPlayed += 1;

                this.diceResult = _.random(1, 6);

                if (this.diceResult > 3) {
                    this.playerWins = true;
                    this.money += Number.parseInt(this.bet, 10);
                } else {
                    this.playerWins = false;
                    this.money -= Number.parseInt(this.bet, 10);
                }
                this.saveStats();
            }
        },
        saveStats() {
            this.moneyArray.push(this.money);

            if (this.playerWins === true) {
                this.stats.wins += 1;
            } else if (this.playerWins === false) {
                this.stats.loss += 1;
            }
            this.loadLineChartData();
            this.loadBarChartData();
        },
        loadLineChartData() {
            this.linechartdata = {
                labels: _.range(this.gamesPlayed + 1),
                datasets: [
                    {
                        label: 'Money',
                        data: this.moneyArray,
                        borderColor: '#0000ff',
                        fill: false
                    }
                ]
            };
        },
        loadBarChartData() {
            this.barchartdata = {
                labels: ['Wins', 'Loss'],
                datasets: [
                    {
                        label: 'Wins',
                        data: this.stats.wins,
                        borderColor: '#00ff00'
                    },
                    {
                        label: 'Loss',
                        data: this.stats.loss,
                        borderColor: '#ff0000'
                    }
                ]
            };
        }
    }
};
</script>
