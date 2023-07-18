<template>
  <footer class="footer">
    <ul class="footer-contact">
      <li>
        <a
          href="https://github.com/RonaldoMi/rick-and-morty-db"
          title="GitHub"
          aria-label="github"
          rel="noopener noreferrer"
          target="_blank"
        >
          <icon-git-hub color="rgb(158, 158, 158)" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ronaldo-miranda-a8107a107/"
          title="Linkedin"
          aria-label="linkedin"
          rel="noopener noreferrer"
          target="_blank"
        >
          <icon-linkedin color="rgb(158, 158, 158)" />
        </a>
      </li>
    </ul>
    <div>
      <span style="font-size: 0.75rem">
        ❮❯ by
        <a class="footer-git-link" href="https://github.com/RonaldoMi">
          Ronaldo Miranda
        </a>
      </span>
      <span style="font-size: 0.75rem">2023</span>
    </div>
  </footer>
</template>
<script setup>
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
</script>
<style scoped>
.footer {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-flow: column nowrap;
  position: relative;
  background: rgb(32, 35, 41);
  color: rgb(158, 158, 158);
  padding: 4.5rem 0px;
  min-height: calc(120px);
  width: 100%;
}
.footer-git-link {
  font-weight: bold;
  transition: color 0.2s ease 0s;
  color: rgb(245, 245, 245);
  border-bottom: 1px solid rgb(255, 152, 0);
}
.footer-contact {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
  width: 100%;
}

.footer-contact li {
  list-style-type: none;
  padding: 0.5rem;
}
</style>
