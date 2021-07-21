import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';



class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
          
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}} >Hardware</CardTitle>
            <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus orci vel imperdiet condimentum. In massa dolor, tristique a tempus.
            </CardText>
            <CardActions border>
              <Button colored>Add</Button>
              <Button colored>Comment</Button>
              <Button colored>React</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1353&q=80'}} >Classroom</CardTitle>
            <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie placerat ex, sit amet placerat diam condimentum malesuada. Donec congue.
            </CardText>
            <CardActions border>
              <Button colored>Add</Button>
              <Button colored>Comment</Button>
              <Button colored>React</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'}} >Ideas</CardTitle>
            <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor molestie ipsum ut efficitur. Curabitur cursus, purus mollis lacinia cursus.
            </CardText>
            <CardActions border>
              <Button colored>Add</Button>
              <Button colored>Comment</Button>
              <Button colored>React</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1 style={{textAlign: 'center'}}>Articles</h1>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', width: '80%'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1623039405147-547794f92e9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80) center / cover'}} >Article of the Day</CardTitle>
            <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit. Sed risus ultricies tristique nulla. Odio facilisis mauris sit amet. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Faucibus et molestie ac feugiat. Nibh venenatis cras sed felis. Elit duis tristique sollicitudin nibh. Nunc vel risus commodo viverra. Urna nec tincidunt praesent semper feugiat. Massa id neque aliquam vestibulum morbi blandit. Enim praesent elementum facilisis leo. Sociis natoque penatibus et magnis dis parturient montes nascetur.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac felis donec et odio pellentesque diam volutpat. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Magnis dis parturient montes nascetur ridiculus mus mauris. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Morbi tincidunt ornare massa eget egestas. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Magna sit amet purus gravida quis blandit turpis. In est ante in nibh mauris cursus mattis molestie a. Et magnis dis parturient montes nascetur ridiculus. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Consequat semper viverra nam libero justo laoreet. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Euismod lacinia at quis risus sed vulputate odio ut enim.
            </CardText>
            <CardActions border>
              <Button colored>Add</Button>
              <Button colored>Comment</Button>
              <Button colored>React</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
</div>
      )
    } else if(this.state.activeTab === 2) {
      return (
                <div className="projects-grid">
                  {/* <h1 style={{textAlign: 'center', display: 'inline-flex'}}>Videos</h1> */}
                  
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1563298258-c9b0371b55cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'}} >Equipment</CardTitle>
                  <CardText>
                  Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra.
                  </CardText>
                  <CardActions border>
                    <Button colored>Add</Button>
                    <Button colored>Comment</Button>
                    <Button colored>React</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
      
                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1615574687763-200d8561284e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}} >On Location</CardTitle>
                  <CardText>
                  Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus.
                  </CardText>
                  <CardActions border>
                    <Button colored>Add</Button>
                    <Button colored>Comment</Button>
                    <Button colored>React</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
      
                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'}} >Editing Booth</CardTitle>
                  <CardText>
                  Id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit.
                  </CardText>
                  <CardActions border>
                    <Button colored>Add</Button>
                    <Button colored>Comment</Button>
                    <Button colored>React</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
      
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1 style={{textAlign: 'center'}}>Study Locales & Events</h1>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto', width: '80%'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80) center / cover'}} >Events</CardTitle>
            <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna. Habitant morbi tristique senectus et netus et malesuada fames ac.
            </CardText>
            <CardActions border>
              <Button colored>Add</Button>
              <Button colored>Comment</Button>
              <Button colored>React</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Photos</Tab>
          <Tab>Articles</Tab>
          <Tab>Videos</Tab>
          <Tab>Events</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
