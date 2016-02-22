using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.Model.Export;
using Tourtlee.BookingSystem.Model.Requests.Bookings;

namespace Tourtlee.BookingSystem.Business.Operations.Bookings
{
    public class ExportBookingsListOperation : OperationBase<BookingsFilter, MemoryStream>
    {
        private readonly IBookingsService _bookingsService;
        private readonly IExportService _exportService;

        public ExportBookingsListOperation(IOperationContext operationContext, 
            IBookingsService bookingsService, IExportService exportService) : base(operationContext)
        {
            _bookingsService = bookingsService;
            _exportService = exportService;
        }

        protected override MemoryStream OnOperate(BookingsFilter request)
        {
            var bookingsList = _bookingsService.GetBookingsList(request);

            var exportRequest = new ExportTableRequest
            {
                TableName = "Bookings",
                Headers = new List<string>
                {
                    "Booking number",
                    "First name",
                    "Last name",
                    "Gender",
                    "Book date",
                    "Checkin date",
                    "Tour",
                    "Tour date"
                },
                Values = bookingsList.Bookings.Select(b => new List<string>
                {
                    b.BookingNumber,
                    b.Firstname,
                    b.Lastname,
                    ((Gender)b.Gender).ToString(),
                    b.BookDate.ToString(CultureInfo.InvariantCulture),
                    b.CheckinDateTime?.ToString(CultureInfo.InvariantCulture),
                    b.TourName,
                    b.TourDate.ToString(CultureInfo.InvariantCulture)

                }).ToList()
            };


            var memoryStream = _exportService.ExportCsvTable(exportRequest);

            return memoryStream;
        }
    }
}
