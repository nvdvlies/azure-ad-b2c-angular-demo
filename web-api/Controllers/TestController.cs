using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TestController : ControllerBase
    {

        [HttpGet]
        public ActionResult Get()
        {
            var claims = User.Claims.Select(claim => $"{claim.Type} = {claim.Value}").ToList();

            return Ok(claims);
        }
    }
}
