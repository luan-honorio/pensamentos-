const Thoughts = require('../model/Thoughts');

module.exports = {
  async dashboard(request, response) {
    const thoughts = await Thoughts.findAll({ raw: true });

    return response.render('thoughts/dashboard', { thoughts });
  },
  
  async registerThought(request, response) {
    return response.render('thoughts/register');
  },

  async createThoughts(request, response) {
    const { title, description } = request.body;

    const thought = await Thoughts.create({
        title,
        description,
    });

    try{
      if(thought) {
        return response.redirect("/thoughts/dashboard")
      }
    }catch(error) {
      console.error(error)
    }
  },

  async showPageEditThought(request, response) {
    const { id } = request.params;

    const thought = await Thoughts.findOne({ where: { id }, raw: true });

    return response.render("thoughts/edit", { thought });
  },

  async updateThought(request, response) {
    const { id } = request.params;
    const { title, description } = request.body;
    
    const updateThought = await Thoughts.update(
      {
        title,
        description,
      },
      {
        where: { id }
      }
    )

    try{
      if(updateThought) {
        return response.redirect("/thoughts/dashboard");
      }
    }catch(error) {
      console.error(error)
    }
  },

  async removeThoughts(request, response) {
    const { id } = request.params;

    const destroyThoughts = await Thoughts.destroy({ where: { id } });

    try {
      if(destroyThoughts) {
        return response.redirect("/thoughts/dashboard")
      }
    }catch(error) {
      console.error(error)
    }
  }
}