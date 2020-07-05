import { Component, Vue, Watch } from 'vue-property-decorator'
import ContentCard from '~/components/Content-Card/Content-Card'
import VideoCard from '~/components/Video-Card/Video-Card'
import GetMaterialShellCard from '~/components/Get-Material-Shell-Card/Get-Material-Shell-Card'
@Component({
  components: {
    ContentCard,
    VideoCard,
    GetMaterialShellCard
  }
})
class Home extends Vue {
  private isReady!: boolean = null
  private mounted(): void {
    this.isReady = true
  }

  private get sticky(): boolean {
    return this.$vuetify.breakpoint.mdAndUp
  }
}
export default Home
