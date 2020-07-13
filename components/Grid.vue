<template>
  <b-container fluid>
    <h1 class="my-5 text-center">Sectores que se trabajan</h1>
    <b-container fluid class="grid">
      <b-container
        class="flex justify-center pv4 items-center item item-b flex justify-center pv4 items-center"
      >
        <b-container class="w-80 tc">
          <p class="b ttu f6 sans-serif">Idee</p>
          <h1 class="playfair b lh-title mv0 pv3">I tormenti del giovane scittore di sinstra</h1>
          <p class="lora">
            <span class="i">Filippo Bologna</span> – p. 150
          </p>
        </b-container>
      </b-container>
      <b-container class="flex justify-center pv5 items-center item item-c">
        <b-container class="w-80 tc pv4">
          <p class="b ttu f6 sans-serif">Fiction</p>
          <h1 class="playfair b lh-title f1 mv0 pt3">non fa riflettere</h1>
          <p class="pb4 pt3 lora">
            <span class="i">Alessandro Piperno</span> – p. 156
          </p>
        </b-container>
      </b-container>
      <b-container class="flex justify-center pv4 items-center item item-d">
        <b-container class="w-80 tc">
          <p class="b ttu f6 sans-serif">Idee</p>
          <h1 class="playfair b lh-title f3 mv0 pv3">Mondadori e Rizzoli nel 2050</h1>
          <p class="lora">
            <span class="i">Giulia Iannuzzi</span> – p. 151
          </p>
        </b-container>
      </b-container>
      <b-container class="flex justify-center pv4 items-center item item-e">
        <b-container class="w-80 tc">
          <p class="b ttu f6 sans-serif">Idee</p>
          <h1 class="playfair b lh-title f3 mv0 pv3">Tondelli</h1>
          <p class="lora">
            <span class="i">Andrea Gentile</span> – p. 150
          </p>
        </b-container>100px
      </b-container>
      <b-container class="flex justify-center pv4 items-center item item-f">
        <b-container class="w-90 tc">
          <p class="b ttu f6 sans-serif">Idee</p>
          <h1 class="playfair b lh-title f3 mv0 pv3">Dopo 70 anni di cattocommunisti</h1>
          <p class="lora">
            <span class="i">Guido Vitiello</span> – p. 154
          </p>
        </b-container>
      </b-container>
      <b-container class="flex justify-center pv4 items-center item item-g">
        <b-container class="w-80 tc">
          <p class="b ttu f6 sans-serif">libri</p>
          <p class="lora f8 lh-title pt3 pb2">
            Paul Vacca,
            <span class="i">Fulmin Tom</span>. Le avventure di un ragazzino geniale, supereroe del Sessantotto
          </p>
          <p class="lora pb1">
            <span class="i">Nadia Terranova</span> – p. 158
          </p>
          <p class="lora f8 lh-title pt2 pb1">
            Alberto Manguel,
            <span class="i">Storia naturale della curlosità</span>. Un saggio che è una camera delle meraviglie
          </p>
          <p class="lora">
            <span class="i">Antonio Sgobba</span> – p. 158
          </p>
          <p class="lora f8 lh-title pt4 pb1">
            Andrea Tarabbia,
            <span class="i">Il giardino delle mosche</span>. Romanzo visionario sulla confessione del mostro di Rostov
          </p>
          <p class="lora">
            <span class="i">Marco Rossari</span> – p. 159
          </p>
        </b-container>
      </b-container>
      <b-container class="flex justify-center pv4 items-center item item-h">
        <b-container class="w-80 tc">
          <p class="b ttu f6 sans-serif">non fiction</p>
          <h1 class="playfair b lh-title mv0 pv3">riconoscere gli errori</h1>
          <p class="lora">
            <span class="i">Giorgio Fontana</span> – p. 160
          </p>
        </b-container>
      </b-container>
      <b-container class="flex justify-center pv4 items-center item item-i">
        <b-container class="w-80 tc">
          <h1 class="f4 ttu tracked playfair b mv0 pb3">Lettera da New York</h1>
          <p class="lora">
            <span class="i">Paul Berman</span> – p. 162
          </p>
        </b-container>
      </b-container>
      <b-container class="item-j flex justify-center nt3">
        <p class="ttu dib lh-copy mt1">
          <span class="border-interrupt ph3 playfair pv2 tracked">le ultime parole lampanti</span>
        </p>
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  background-color: #ffff63;
}

.container-fluid {
  padding: 0;
}

.item-a {
  grid-column-start: 1;
  grid-column-end: 5;
}

.item-b {
  grid-column-start: 1;
  grid-column-end: span 4;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}

.item-c {
  grid-column-start: 1;
  grid-column-end: span 4;
  border: 1px solid #000;
}

.item-d {
  grid-column-start: 1;
  grid-column-end: span 4;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
}

.item-e {
  grid-column-start: 1;
  grid-column-end: span 4;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  border-left: 1px solid #000;
}

.item-f {
  grid-column-start: 1;
  grid-column-end: span 4;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
}

.item-g {
  grid-column-start: 1;
  grid-column-end: span 4;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
}

.item-h {
  grid-column-start: 1;
  grid-column-end: span 4;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}

.item-i {
  grid-column-start: 1;
  grid-column-end: span 4;
  border-left: 1px solid #000;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
}

.item-j {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
}

.border-interrupt {
  background-color: #ffff63;
}

.playfair {
  font-family: "Playfair Display", serif;
}

.lora {
  font-family: "Lora", serif;
}

.f8 {
  font-size: 0.78rem;
}

.item:hover {
  background-color: #222;
  color: #ffff63;
  transition: all 0.25s ease;
}

.item {
  transition: all 0.25s ease;
}

@media (min-width: 1011px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows:
      0
      0
      127px
      127px
      127px
      127px
      127px
      127px
      127px
      127px;
  }
  .item-a {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .item-b {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 6;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    border-right: none;
  }

  .item-c {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 7;
    border: 1px solid #000;
  }

  .item-d {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 6;
    grid-row-end: 8;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
  }

  .item-e {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 6;
    grid-row-end: 8;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #000;
  }

  .item-f {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 7;
    grid-row-end: 9;
    border-left: 1px solid #000;
    border-bottom: none;
    border-right: none;
  }

  .item-g {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 7;
    grid-row-end: 11;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  .item-h {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 8;
    grid-row-end: 11;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    border-right: none;
  }

  .item-i {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 9;
    grid-row-end: 11;
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    border-right: none;
  }

  .item-j {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 5;
  }

  .mobile-message {
    display: none;
  }
}
</style>
