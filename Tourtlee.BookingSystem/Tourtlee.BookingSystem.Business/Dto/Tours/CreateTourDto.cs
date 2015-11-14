using System.ComponentModel.DataAnnotations;

namespace Tourtlee.BookingSystem.Business.Dto.Tours
{
    public class CreateTourDto
    {
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public string DescriptionShort { get; set; }
        public int Availabilities { get; set; }
    }
}
