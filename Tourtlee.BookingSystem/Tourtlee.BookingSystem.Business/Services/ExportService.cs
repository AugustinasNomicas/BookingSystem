using Microsoft.Extensions.DependencyInjection;
using System;
using System.IO;
using Tourtlee.BookingSystem.Business.Operations.Export;
using Tourtlee.BookingSystem.Model.Export;

namespace Tourtlee.BookingSystem.Business.Services
{
    public interface IExportService
    {
        MemoryStream ExportCsvTable(ExportTableRequest request);
    }

    public class ExportService : IExportService
    {
        private readonly IServiceProvider _serviceProvider;

        public ExportService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public MemoryStream ExportCsvTable(ExportTableRequest request)
        {
            var operation = _serviceProvider.GetRequiredService<ExportCsvTableOperation>();
            return operation.Operate(request);
        }
    }
}
